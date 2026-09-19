import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import ServicesHub from "./pages/ServicesHub";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/painters-in-nigeria" element={<ServiceDetail slug="painters-in-nigeria" />} />
        <Route path="/house-painting-services-nigeria" element={<ServiceDetail slug="house-painting-services-nigeria" />} />
        <Route path="/exterior-painting-nigeria" element={<ServiceDetail slug="exterior-painting-nigeria" />} />
        <Route path="/interior-designers-in-nigeria" element={<ServiceDetail slug="interior-designers-in-nigeria" />} />
        <Route path="/pop-ceiling-installation-nigeria" element={<ServiceDetail slug="pop-ceiling-installation-nigeria" />} />
        <Route path="/wall-screeding-nigeria" element={<ServiceDetail slug="wall-screeding-nigeria" />} />
        <Route path="/new-wave-emulsion-paint-nigeria" element={<ServiceDetail slug="new-wave-emulsion-paint-nigeria" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/real-estate" element={<ServiceDetail slug="real-estate" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
