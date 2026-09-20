import { useRef, useState } from "react";
import { Move } from "lucide-react";

interface Props {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({ before, after, alt = "Project" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    // Capture the pointer so the drag continues even if the user moves off the handle
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (dragging.current) {
      updateFromClientX(e.clientX);
    }
  }

  function endDrag(e: React.PointerEvent) {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        userSelect: "none",
        background: "rgba(14, 13, 12, 0.05)",
        // FIX 1: Allow the browser to handle vertical scrolling naturally
        touchAction: "pan-y", 
      }}
    >
      <img
        src={after}
        alt={`${alt} — after`}
        draggable={false}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <img
        src={before}
        alt={`${alt} — before`}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* FIX 2: Wrap the handle in a larger, invisible touch target */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          transform: "translateX(-50%)",
          width: "48px", // Big enough for a thumb, invisible to the eye
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "ew-resize",
          // FIX 3: Only disable touch actions on the handle itself
          touchAction: "none", 
          zIndex: 10,
        }}
      >
        {/* Visual Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "var(--gold)",
          }}
        />
        
        {/* Visual Handle Button */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "999px",
            background: "var(--gold)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(14, 13, 12, 0.4)",
          }}
        >
          <Move size={16} color="var(--black)" />
        </div>
      </div>

      <span style={{ position: "absolute", top: 8, left: 8, background: "rgba(14, 13, 12, 0.85)", color: "var(--off-white)", fontSize: "0.65rem", padding: "0.25rem 0.5rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", zIndex: 20 }}>
        Before
      </span>
      <span style={{ position: "absolute", top: 8, right: 8, background: "rgba(229, 57, 53, 0.9)", color: "var(--off-white)", fontSize: "0.65rem", padding: "0.25rem 0.5rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", zIndex: 20 }}>
        After
      </span>
    </div>
  );
}
