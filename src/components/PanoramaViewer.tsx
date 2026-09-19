import { useRef, useState } from "react";

export default function PanoramaViewer({ image }: { image: string }) {
  const [offsetX, setOffsetX] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    lastX.current = e.clientX;
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setOffsetX((prev) => prev + delta);
  }
  function endDrag() {
    dragging.current = false;
  }

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: `${offsetX}px center`,
        cursor: "grab",
        touchAction: "none",
        userSelect: "none",
      }}
    />
  );
}
