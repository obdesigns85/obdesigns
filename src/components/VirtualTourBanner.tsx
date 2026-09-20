import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import "../styles/tourBanner.css";

export default function VirtualTourBanner() {
  return (
    <section className="tourBanner">
      {/* Background frame from your walkthrough */}
      <div className="tourBannerBg">
        <img
          src="/frames/frame-001.jpg"
          alt="Preview of OB Designs & Interiors virtual walkthrough"
          loading="lazy"
        />
      </div>

      <div className="tourBannerGradient" />

      <div className="tourBannerContent">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="tourBannerLabel">
            <span className="tourBannerDot" />
            Virtual Walkthrough
          </span>

          <h2 className="tourBannerTitle">
            Don't just see it.
            <br />
            <em>Walk through it.</em>
          </h2>

          <p className="tourBannerDesc">
            Scroll through a real finished home — from the entry, through the
            living room, into the master bedroom.
          </p>

          <div className="tourBannerActions">
            <Link to="/virtual-tour" className="tourBannerCta">
              <Play size={15} fill="currentColor" />
              Step Inside
              <ArrowRight size={16} />
            </Link>
            <span className="tourBannerMeta">Runs on scroll · No signup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
