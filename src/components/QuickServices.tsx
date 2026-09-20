import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import "../styles/quickServices.css";

// 1. Define the TypeScript interface for your data
interface Service {
  title: string;
  location: string;
  image: string;
  slug: string;
}

// 2. Apply the interface to the array
const quickServices: Service[] = [
  { 
    title: "Professional Painting", 
    location: "Nationwide", 
    image: "/images/ob/painting-4.jpg", 
    slug: "painters-in-nigeria" 
  },
  { 
    title: "Exterior Wall Screeding", 
    location: "Nationwide", 
    image: "/images/ob/screeding-1.jpg", 
    slug: "wall-screeding-nigeria" 
  },
  { 
    title: "POP Ceiling Installation", 
    location: "Nationwide", 
    image: "/images/ob/pop-2.jpg", 
    slug: "pop-ceiling-installation-nigeria" 
  },
  { 
    title: "Interior Design & Finishing", 
    location: "Nationwide", 
    image: "/images/ob/interior-2.jpg", 
    slug: "interior-designers-in-nigeria" 
  },
  { 
    title: "Real Estate & Land Consultancy", 
    location: "Nationwide", 
    image: "/images/ob/real-estate-1.jpg", 
    slug: "real-estate" 
  },
];

export default function QuickServices() {
  return (
    <section className="quickServicesSection" aria-label="Our Core Services">
      <div className="quickServicesInner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="quickServicesHeader"
        >
          <h2 className="quickServicesTitle">Our Core Services</h2>
          <p className="quickServicesSubtitle">Quality craftsmanship tailored to your space.</p>
        </motion.div>

        <div className="quickServicesGrid">
          {quickServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/${service.slug}`} className="quickServiceCard">
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="quickServiceImage"
                  loading="lazy"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="quickServiceOverlay"></div>

                {/* Card Content */}
                <div className="quickServiceContent">
                  <div className="quickServiceText">
                    <h3 className="quickServiceCardTitle">{service.title}</h3>
                    <span className="quickServiceLocation">
                      <MapPin size={12} className="locationIcon" />
                      {service.location}
                    </span>
                  </div>
                  <div className="quickServiceIconWrapper">
                    <ArrowRight size={18} className="quickServiceIcon" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
