import { useState, useEffect } from "react";
import { RotateCw, X } from "lucide-react";
import PanoramaViewer from "./PanoramaViewer";

export default function TourViewer({ image, title }: { image: string; title: string }) {
  const [active, setActive] = useState(false);

  // Lock body scroll when the 360 viewer is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  // --- FULL SCREEN VIEWER ---
  if (active) {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#000" }}>
        <PanoramaViewer image={image} />
        
        {/* Floating Exit Button */}
        <button
          onClick={() => setActive(false)}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(229, 57, 53, 0.8)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
          aria-label="Exit 360 view"
        >
          <X size={24} />
        </button>

        {/* User Instruction Hint */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          fontSize: "0.8rem",
          fontFamily: "Inter, sans-serif",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }}>
          Drag to look around
        </div>
      </div>
    );
  }

  // --- THUMBNAIL / PREVIEW STATE ---
  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      aspectRatio: "16 / 9", 
      background: "#000", 
      overflow: "hidden",
      borderRadius: "12px" // Matches the rest of your site's cards
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)" }} 
      />
      
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center" 
      }}>
        <button
          onClick={() => setActive(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "var(--gold, #B7913C)",
            color: "var(--black, #0E0D0C)",
            border: "none",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <RotateCw size={20} /> Step Inside in 360°
        </button>
      </div>

      <span
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "0.3rem 0.6rem",
          borderRadius: "4px",
          fontFamily: "Inter, sans-serif",
          backdropFilter: "blur(4px)"
        }}
      >
        360° Immersive View
      </span>
    </div>
  );
}
