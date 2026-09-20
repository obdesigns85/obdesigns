import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 50;
const FRAME_PATH = "/frames/frame-";

function getFrameSrc(index: number) {
  const padded = String(index + 1).padStart(3, "0");
  return `${FRAME_PATH}${padded}.jpg`;
}

export default function TourViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };
      images.push(img);
    }

    return () => {
      images.forEach((img) => (img.src = ""));
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const frame = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(progress * (FRAME_COUNT - 1)))
    );
    setCurrentFrame(frame);
  });

  return (
    <section
      ref={containerRef}
      style={{ height: "300vh", position: "relative", background: "#000" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={getFrameSrc(currentFrame)}
          alt="Virtual tour"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold, #B7913C)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Loading tour…
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "1.5rem",
            right: "1.5rem",
            color: "#fff",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold, #B7913C)",
              fontWeight: 600,
            }}
          >
            Virtual Walkthrough
          </span>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              margin: "0.5rem 0",
              lineHeight: 1.1,
            }}
          >
            Step inside our work
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              opacity: 0.8,
              maxWidth: "400px",
              lineHeight: 1.5,
            }}
          >
            Scroll to walk through a space we designed and built.
          </p>
        </div>

        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "var(--gold, #B7913C)",
            transformOrigin: "0%",
            scaleX: scrollYProgress,
          }}
        />
      </div>
    </section>
  );
              }
