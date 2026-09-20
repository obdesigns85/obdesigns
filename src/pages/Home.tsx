import Hero from "../components/Hero";
import QuickServices from "../components/QuickServices";
import FeaturedWork from "../components/FeaturedWork";
import BeforeAfterTeaser from "../components/BeforeAfterTeaser";
import WhyOB from "../components/WhyOB";
import AboutOB from "../components/AboutOB";
import PaintStory from "../components/PaintStory";
import Process from "../components/Process";
import RealEstateFeature from "../components/RealEstateFeature";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { useSEO } from "../lib/useDocumentTitle";
import VirtualTourBanner from "../components/VirtualTourBanner";

export default function Home() {
  useSEO({
    title: "OB Designs & Interiors | Painting, POP, Real Estate & Paint in Nigeria",
    description:
      "OB Designs & Interiors LTD offers painting, screeding, POP work, interior & exterior design, and trusted Real Estate consultancy in Mowe, Nigeria.",
  });

  return (
    <>
      <Hero />
      <QuickServices />
      <FeaturedWork />
 <BeforeAfterTeaser />
      <VirtualTourBanner />
      <RealEstateFeature />
      <WhyOB />
      <AboutOB />
      <PaintStory />
      <Process />
      <Footer />
      <StickyCTA />
    </>
  );
        }
