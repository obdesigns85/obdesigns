import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Building2,
  Images,
  Camera,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "../data/business";
import "../styles/nav.css";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/real-estate", label: "Real Estate", icon: Building2 },
  { to: "/projects", label: "Projects", icon: Images },
  { to: "/virtual-tour", label: "Virtual Tour", icon: Camera },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("sidebar-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("sidebar-open");
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 780) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="navHeader">
      <div className="navInner">
        <Link to="/" className="navLogo">
          <img
            src="/images/ob/logo-1.jpg"
            alt="OB Designs & Interiors"
            className="navLogoImg"
          />
          <span className="navLogoText">OB Designs & Interiors LTD</span>
        </Link>

        <nav className="navLinks">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
          <Link to="/consultation" className="navCta">
            Request a Free Quote
          </Link>
        </nav>

        <button
          className="navToggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="navSidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <div className="navSidebarAccent" />

              <div className="navSidebarHeader">
                <span className="navSidebarLabel">Menu</span>
                <button
                  className="navSidebarClose"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="navSidebarLinks">
                {NAV_LINKS.map(({ to, label, icon: Icon }, i) => {
                  const active = location.pathname === to;
                  const number = String(i + 1).padStart(2, "0");
                  return (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.045,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={to}
                        className={`navSidebarLink${
                          active ? " isActive" : ""
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="navSidebarNumber">{number}</span>
                        <span className="navSidebarText">{label}</span>
                        <Icon size={16} className="navSidebarIcon" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="navSidebarFooter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.3 }}
              >
                <Link
                  to="/consultation"
                  className="navSidebarCta"
                  onClick={() => setOpen(false)}
                >
                  Request a Free Quote
                </Link>
                <a
                  href={`https://wa.me/${business.phoneWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="navSidebarWhatsapp"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
                <p className="navSidebarTagline">
                  Interiors · Painting · Finishing
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
