// components/ScrollVideoTour.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollVideoTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to video timeline
  useTransform(scrollYProgress, (progress) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const targetTime = progress * video.duration;
    // Only update if we've moved enough to matter (reduces stutter)
    if (Math.abs(video.currentTime - targetTime) > 0.02) {
      video.currentTime = targetTime;
    }
  });

  return (
    <section 
      ref={containerRef} 
      style={{ height: "400vh", position: "relative", background: "#000" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        <video
          ref={videoRef}
          src="/videos/tour.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark gradient for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)",
          pointerEvents: "none",
        }} />

        {/* Overlay Content */}
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "1.5rem",
          right: "1.5rem",
          color: "#fff",
        }}>
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold, #B7913C)",
            fontWeight: 600,
          }}>
            Virtual Walkthrough
          </span>
          <h2 style={{
            fontFamily: "Fraunces, serif",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            margin: "0.5rem 0 0.5rem",
            lineHeight: 1.1,
          }}>
            Step inside our work
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            opacity: 0.8,
            maxWidth: "400px",
            lineHeight: 1.5,
          }}>
            Scroll to walk through a space we designed and built.
          </p>
        </div>

        {/* Scroll Progress Bar */}
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
