import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../styles/tourBanner.css";

export default function VirtualTourBanner() {
  return (
    <section className="tourBanner">
      <div className="tourBannerPanel">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="tourBannerPanelInner"
        >
          <div className="tourBannerMarker">
            <span>01</span>
            <span className="tourBannerMarkerLine" />
            <span>Walkthrough</span>
          </div>

          <h2 className="tourBannerTitle">
            Step inside a home
            <br />
            we designed and built.
          </h2>

          <p className="tourBannerBody">
            A continuous scroll through a finished project — entry, living room,
            master bedroom. Scroll to move. Stop to look around.
          </p>

          <Link to="/virtual-tour" className="tourBannerLink">
            Begin the walkthrough
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </Link>
        </motion.div>
      </div>

      <div className="tourBannerMedia">
        <img
          src="/frames/frame-001.jpg"
          alt="Preview of OB Designs & Interiors walkthrough"
          loading="lazy"
        />
        <span className="tourBannerCaption">
          Entry sequence · OB Designs &amp; Interiors
        </span>
      </div>
    </section>
  );
}
