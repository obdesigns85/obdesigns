import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { tourScenes } from "../data/tourScenes";
import TourViewer from "../components/TourViewer";
import { useSEO } from "../lib/useDocumentTitle";
import Breadcrumb from "../components/Breadcrumb";
import { business } from "../data/business";

export default function VirtualTour() {
  useSEO({
    title: "360° Virtual Tour | OB Designs & Interiors",
    description: "Take a 360-degree virtual tour of an OB Designs & Interiors project — see the quality of our finishing work up close.",
  });

  const [activeId, setActiveId] = useState(tourScenes[0]?.id);
  const activeScene = tourScenes.find((s) => s.id === activeId);

  return (
    <div style={{ background: "var(--off-white, #F3ECE1)", minHeight: "100vh" }}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Virtual Tour" }]} />

      {/* Full-bleed tour — no side padding, touches both screen edges */}
      {activeScene && <TourViewer image={activeScene.image} title={activeScene.title} />}

      {tourScenes.length > 1 && (
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", padding: "1rem 1.5rem 0" }}>
          {tourScenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveId(scene.id)}
              style={{
                padding: "0.6rem 1.1rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                border: "1px solid #0E0D0C22",
                background: scene.id === activeId ? "var(--black, #0E0D0C)" : "transparent",
                color: scene.id === activeId ? "var(--off-white, #F3ECE1)" : "var(--black, #0E0D0C)",
                cursor: "pointer",
              }}
            >
              {scene.title}
            </button>
          ))}
        </div>
      )}

      {/* Promotional content — padded, centered column, mobile-first */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold, #B7913C)", margin: "0 0 0.75rem" }}>
          360° Virtual Tour
        </p>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.9rem, 6vw, 2.5rem)", color: "var(--black, #0E0D0C)", margin: "0 0 1rem" }}>
          Step inside our work
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "#0E0D0C88", marginBottom: "2rem" }}>
          Photos only tell part of the story. Tap "View in 360°" above to look around a real
          finished space in every direction — the way it actually feels to stand in it.
        </p>

        <div style={{ background: "#FFFFFF", border: "1px solid #0E0D0C14", padding: "1.75rem" }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "1.15rem", color: "var(--black, #0E0D0C)", margin: "0 0 1rem" }}>
            About This Space
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#0E0D0C99", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            This tour showcases the level of finishing OB Designs & Interiors delivers on every
            project — from wall treatment to lighting to overall spatial feel.
          </p>

          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E0D0C77", margin: "0 0 0.9rem" }}>
            Why book a walkthrough with us
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "grid", gap: "0.7rem" }}>
            {["Owner personally oversees every project", "High-quality materials on every job", "Nationwide service and delivery"].map((point) => (
              <li key={point} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#0E0D0Cdd" }}>
                <CheckCircle2 size={16} color="var(--red, #C8272C)" style={{ marginTop: "2px", flexShrink: 0 }} />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/consultation"
            style={{ display: "block", textAlign: "center", background: "var(--gold, #B7913C)", color: "var(--black, #0E0D0C)", fontWeight: 600, padding: "0.9rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", marginBottom: "0.75rem" }}
          >
            Request a Free Quote
          </Link>
          <a
            href={`https://wa.me/${business.phoneWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "var(--black, #0E0D0C)", color: "var(--off-white, #F3ECE1)", padding: "0.9rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
