import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/featuredWork.css"; // Make sure to create this CSS file

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
        
        {/* Header */}
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

        {/* Grid - Now handled by CSS class for responsiveness */}
        <div className="featuredWorkGrid">
          {featuredImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="featuredWorkCard"
              whileHover={{ borderColor: "var(--gold)" }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="featuredWorkImage"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
