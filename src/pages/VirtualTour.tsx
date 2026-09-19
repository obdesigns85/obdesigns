import { useState } from "react";
import { Move } from "lucide-react";
import { tourScenes } from "../data/tourScenes";
import PanoramaViewer from "../components/PanoramaViewer";
import { useSEO } from "../lib/useDocumentTitle";
import Breadcrumb from "../components/Breadcrumb";

export default function VirtualTour() {
  useSEO({
    title: "360° Virtual Tour | OB Designs & Interiors",
    description: "Take a 360-degree virtual tour of OB Designs & Interiors project spaces — drag to look around each room.",
  });

  const [activeId, setActiveId] = useState(tourScenes[0]?.id);
  const activeScene = tourScenes.find((s) => s.id === activeId);

  return (
    <div style={{ background: "#0E0D0C", minHeight: "100vh" }}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Virtual Tour" }]} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 1.5rem 3rem" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D8A73D", margin: "0 0 0.75rem" }}>
          360° Virtual Tour
        </p>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#F3ECE1", margin: "0 0 1rem" }}>
          Step inside our work
        </h1>
<p style={{ fontFamily: "Inter, sans-serif", color: "#F3ECE199", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <Move size={16} /> Drag to look around. Pinch or scroll to zoom.
</p>

        {activeScene && <PanoramaViewer image={activeScene.image} />}

        {tourScenes.length > 1 && (
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {tourScenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => setActiveId(scene.id)}
                style={{
                  padding: "0.6rem 1.1rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  border: "1px solid #F3ECE133",
                  background: scene.id === activeId ? "#D8A73D" : "transparent",
                  color: scene.id === activeId ? "#0E0D0C" : "#F3ECE1",
                  cursor: "pointer",
                }}
              >
                {scene.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
