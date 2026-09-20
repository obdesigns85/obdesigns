import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function StickyCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight - 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="stickyCta"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.85rem",
        boxShadow: "0 -8px 20px -12px rgba(14, 13, 12, 0.4)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s ease",
      }}
    >
      <Link
        to="/consultation"
        style={{
          flex: 1,
          textAlign: "center",
          background: "var(--red)",
          color: "var(--off-white)",
          padding: "0.9rem",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Request a Free Quote
      </Link>
      <a
        href={`https://wa.me/${business.phoneWhatsApp}`}
        target="_blank"
        rel="noreferrer"
        style={{
          flex: 1,
          textAlign: "center",
          background: "var(--black)",
          color: "var(--off-white)",
          padding: "0.9rem",
          textDecoration: "none",
        }}
      >
        WhatsApp Us
      </a>
    </div>
  );
}
