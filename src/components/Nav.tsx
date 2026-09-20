import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navHeader">
      <div className="navInner">
        <Link to="/" className="navLogo" onClick={() => setOpen(false)}>
          <img src="/images/ob/logo-1.jpg" alt="OB Designs & Interiors" className="navLogoImg" />
          <span className="navLogoText">OB Designs & Interiors LTD</span>
        </Link>

        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/virtual-tour">Virtual Tour</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/consultation" className="navCta">Request a Free Quote</Link>
        </nav>

        <button className="navToggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navMobileMenu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/real-estate" onClick={() => setOpen(false)}>Real Estate</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/virtual-tour" onClick={() => setOpen(false)}>Virtual Tour</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/consultation" className="navCta" onClick={() => setOpen(false)}>Request a Free Quote</Link>
        </div>
      )}
    </header>
  );
}
