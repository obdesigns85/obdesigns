import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/quickServices.css";

const quickServices = [
  { name: "Professional Painting in Mowe", slug: "painters-in-nigeria" },
  { name: "Exterior Wall Screeding in Ogun State", slug: "wall-screeding-nigeria" },
  { name: "POP Ceiling Installation in Nigeria", slug: "pop-ceiling-installation-nigeria" },
  { name: "Interior Design & Finishing in Lagos", slug: "interior-designers-in-nigeria" },
  { name: "Real Estate & Land Consultancy", slug: "real-estate" },
];

export default function QuickServices() {
  return (
    <section className="quickServicesSection" aria-label="Our Core Services">
      <div className="quickServicesInner">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="quickServicesTitle"
        >
          Our Core Services
        </motion.h2>

        <div className="quickServicesRow">
          {quickServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to={`/${service.slug}`} className="quickServiceLink">
                <span className="quickServiceName">{service.name}</span>
                <ArrowRight size={16} className="quickServiceIcon" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
    ;
}
