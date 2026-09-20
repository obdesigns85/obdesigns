import { useState } from "react";
import { RotateCw, X } from "lucide-react";
import PanoramaViewer from "./PanoramaViewer";

export default function TourViewer({ image, title }: { image: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#000", overflow: "hidden" }}>
      {active ? (
        <>
          <PanoramaViewer image={image} />
          <button
            onClick={() => setActive(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(14,13,12,0.8)",
              color: "var(--off-white, #F3ECE1)",
              border: "none",
              padding: "0.5rem 0.9rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            <X size={14} /> Exit 360°
          </button>
        </>
      ) : (
        <>
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button
              onClick={() => setActive(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--gold, #B7913C)",
                color: "var(--black, #0E0D0C)",
                border: "none",
                padding: "0.9rem 1.6rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              }}
            >
              <RotateCw size={18} /> View in 360°
            </button>
          </div>
          <span
            style={{
              position: "absolute",
              bottom: "0.9rem",
              left: "0.9rem",
              background: "rgba(14,13,12,0.8)",
              color: "var(--off-white, #F3ECE1)",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.3rem 0.6rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            360° View Available
          </span>
        </>
      )}
    </div>
  );
}
