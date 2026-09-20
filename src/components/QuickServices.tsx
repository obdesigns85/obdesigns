import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PaintBucket, Layers, Sparkles, Sofa, Building2, ArrowRight } from "lucide-react";
import { services } from "../data/content";
import { projects, type ProjectCategory } from "../data/projects";

const icons: Record<string, typeof PaintBucket> = {
  Painting: PaintBucket,
  Screeding: Layers,
  "POP Installations": Sparkles,
  Interiors: Sofa,
  Exteriors: Building2,
};

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--off-white, #F3ECE1)", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold, #B7913C)", margin: "0 0 0.75rem" }}>
            What We Do
          </p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--black, #0E0D0C)", margin: 0 }}>
            Our Core Services
          </h2>
        </motion.div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {services.map((s, i) => {
            const Icon = icons[s.name] ?? Sparkles;
            const thumbnail = projects.find((p) => p.category === (s.name as ProjectCategory))?.image;
            const accent = i % 2 === 0 ? "var(--gold, #B7913C)" : "var(--red, #C8272C)";

            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/${s.slug}`}
                  style={{
                    display: "block",
                    background: "#FFFFFF",
                    border: "1px solid #0E0D0C14",
                    textDecoration: "none",
                    color: "inherit",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {thumbnail && (
                    <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "#0E0D0C0d" }}>
                      <img src={thumbnail} alt={s.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}

                  <div style={{ padding: "1.5rem" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "999px",
                        background: accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                        marginTop: thumbnail ? "-2.75rem" : 0,
                        border: "3px solid #FFFFFF",
                      }}
                    >
                      <Icon size={19} color="var(--black, #0E0D0C)" strokeWidth={1.75} />
                    </div>

                    <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.15rem", color: "var(--black, #0E0D0C)", margin: "0 0 0.5rem" }}>
                      {s.name}
                    </h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#0E0D0C99", margin: "0 0 1rem", lineHeight: 1.6 }}>
                      {s.description}
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "Inter, sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "var(--black, #0E0D0C)" }}>
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
