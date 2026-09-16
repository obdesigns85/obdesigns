import { Link } from "react-router-dom";
import { useSEO } from "../lib/useDocumentTitle";

export default function NotFound() {
  useSEO({
    title: "Page not found | OB Designs & Interiors",
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", fontFamily: "Inter, sans-serif", background: "#F3ECE1" }}>
      <p style={{ fontFamily: "Fraunces, serif", fontSize: "4rem", color: "#0E0D0C", margin: 0 }}>404</p>
      <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", color: "#0E0D0C", margin: "0.5rem 0 1rem" }}>Page not found</h1>
      <p style={{ color: "#0E0D0C88", marginBottom: "1.5rem" }}>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ background: "#0E0D0C", color: "#F3ECE1", padding: "0.8rem 1.6rem", textDecoration: "none", fontSize: "0.9rem" }}>
        Back to Home
      </Link>
    </div>
  );
}
