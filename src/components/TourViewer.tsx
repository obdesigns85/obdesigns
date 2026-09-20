import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  MotionValue,
} from "framer-motion";

const FRAME_COUNT = 50;
const FRAME_PATH = "/frames/frame-";
const SCROLL_HEIGHT = "800vh"; // Longer = slower, more cinematic scroll

interface ScrollMessageItem {
  start: number;
  end: number;
  label: string;
  title: string;
  body: string;
}

const SCROLL_MESSAGES: ScrollMessageItem[] = [
  {
    start: 0.0,
    end: 0.2,
    label: "The Welcome",
    title: "A space designed to greet you",
    body: "From the entry, every detail is intentional.",
  },
  {
    start: 0.25,
    end: 0.45,
    label: "The Living Room",
    title: "Where the family gathers",
    body: "Warm lighting, considered textures, room to breathe.",
  },
  {
    start: 0.5,
    end: 0.7,
    label: "The Craft",
    title: "Details you can feel",
    body: "Every finish is personally supervised by the owner.",
  },
  {
    start: 0.75,
    end: 0.95,
    label: "The Standard",
    title: "Built for the long term",
    body: "Quality materials. Nationwide delivery. No shortcuts.",
  },
];

function getFrameSrc(index: number) {
  const padded = String(index + 1).padStart(3, "0");
  return `${FRAME_PATH}${padded}.jpg`;
}

function ScrollMessage({
  msg,
  progress,
}: {
  msg: ScrollMessageItem;
  progress: MotionValue<number>;
}) {
  const fadeRange = 0.06;

  const opacity = useTransform(
    progress,
    [msg.start, msg.start + fadeRange, msg.end - fadeRange, msg.end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [msg.start, msg.start + fadeRange, msg.end - fadeRange, msg.end],
    [30, 0, 0, -30]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "12%",
        left: "1.5rem",
        right: "1.5rem",
        color: "#fff",
        opacity,
        y,
        pointerEvents: "none",
        maxWidth: "500px",
      }}
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold, #B7913C)",
          fontWeight: 600,
        }}
      >
        {msg.label}
      </span>
      <h2
        style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
          margin: "0.5rem 0",
          lineHeight: 1.15,
        }}
      >
        {msg.title}
      </h2>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          opacity: 0.85,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {msg.body}
      </p>
    </motion.div>
  );
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
      images.forEach((img) => {
        img.src = "";
      });
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
      style={{
        height: SCROLL_HEIGHT,
        position: "relative",
        background: "#000",
      }}
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
          alt="Virtual walkthrough"
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
            Loading walkthrough…
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {SCROLL_MESSAGES.map((msg) => (
          <ScrollMessage
            key={msg.label}
            msg={msg}
            progress={scrollYProgress}
          />
        ))}

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
