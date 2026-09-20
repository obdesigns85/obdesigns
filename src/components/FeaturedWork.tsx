import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Maximize2, X } from "lucide-react";
import "../../styles/featuredWork.css";

const featuredImages = [
  { src: "/images/ob/featured-1.jpg", alt: "OB Designs & Interiors featured project 1" },
  { src: "/images/ob/featured-2.jpg", alt: "OB Designs & Interiors featured project 2" },
  { src: "/images/ob/featured-3.jpg", alt: "OB Designs & Interiors featured project 3" },
  { src: "/images/ob/featured-4.jpg", alt: "OB Designs & Interiors featured project 4" },
];

export default function FeaturedWork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        {/* Grid */}
        <div className="featuredWorkGrid">
          {featuredImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="featuredWorkCard"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="featuredWorkImage"
              />
              
              {/* Overlay with zoom icon */}
              <div className="featuredWorkOverlay">
                <div className="featuredWorkIconWrapper">
                  <Maximize2 size={20} color="var(--black)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightboxBackdrop"
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            <button 
              className="lightboxClose" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={24} color="white" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded project view"
              className="lightboxImage"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
              }
