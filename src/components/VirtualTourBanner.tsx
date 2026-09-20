import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RotateCw } from "lucide-react";
import { tourScenes } from "../data/tourScenes";

export default function VirtualTourBanner() {
  const previewImage = tourScenes[0]?.image;
  if (!previewImage) return null;

  return (
    <section style={{ position: "relative", background: "var(--black, #0E0D0C)", overflow: "hidden" }}>
      <img
        src={previewImage}
        alt="360° virtual tour preview"
        style={{ width: "100%", height: "420px", objectFit: "cover", opacity: 0.55 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold, #B7913C)", marginBottom: "0.75rem" }}>
            New
          </p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.6rem, 5vw, 2.5rem)", color: "var(--off-white, #F3ECE1)", margin: "0 0 1rem" }}>
            Walk through our work in 360°
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#F3ECE1cc", maxWidth: "40ch", margin: "0 auto 1.75rem" }}>
            Don't just see the photos — step inside a real finished space and look around for yourself.
          </p>
          <Link
            to="/virtual-tour"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--gold, #B7913C)",
              color: "var(--black, #0E0D0C)",
              fontWeight: 600,
              padding: "0.9rem 1.8rem",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
            }}
          >
            <RotateCw size={18} /> Take the 360° Tour
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
