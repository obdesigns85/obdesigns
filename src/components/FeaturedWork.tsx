import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featuredImages = [
  { src: "/images/ob/featured-1.jpg", alt: "OB Designs & Interiors featured project 1" },
  { src: "/images/ob/featured-2.jpg", alt: "OB Designs & Interiors featured project 2" },
  { src: "/images/ob/featured-3.jpg", alt: "OB Designs & Interiors featured project 3" },
  { src: "/images/ob/featured-4.jpg", alt: "OB Designs & Interiors featured project 4" },
];

export default function FeaturedWork() {
  return (
    <section id="work" style={{ background: "var(--off-white)", padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", margin: 0, color: "var(--black)" }}
          >
            Featured work
          </motion.h2>
          <Link to="/projects" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--red)", textDecoration: "underline" }}>
            View all projects →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {featuredImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ overflow: "hidden", aspectRatio: "4 / 5", background: "rgba(14, 13, 12, 0.05)", border: "2px solid transparent", transition: "border-color 0.3s ease" }}
              whileHover={{ borderColor: "var(--gold)" }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
