import type { ProjectCategory } from "./projects";

export interface ServiceInfo {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  detail: string;
  quoteNote: string;
  category?: ProjectCategory;
  overrideImages?: string[];
  isProduct?: boolean;
}

export const servicesDetail: ServiceInfo[] = [
  {
    slug: "painters-in-nigeria",
    metaTitle: "Professional Painters in Mowe, Ogun State & Nigeria | OB Designs",
    metaDescription: "OB Designs & Interiors LTD delivers professional interior and exterior painting across Mowe, Ogun State, Lagos, and nationwide. 6 years of experience and our own New Wave paint.",
    heading: "Professional Painters in Nigeria",
    intro: "Looking for trusted painters in Mowe, Ogun State, or across Nigeria? OB Designs & Interiors LTD delivers flawless interior and exterior painting.",
    detail: "Our painting crews handle everything from single-room touch-ups to full building repaints across Mowe, Lagos, and beyond. We manufacture our own New Wave emulsion paint, meaning we understand exactly how different finishes perform in Nigerian weather. Whether you need a fresh coat for your home in Mowe or a commercial repaint in Lagos, we deliver a clean, durable, and perfectly finished surface.",
    quoteNote: "Painting costs depend on wall area, number of coats, and finish (matte, silk, or gloss). Request a free quote and we will give you an accurate price for your specific location.",
    category: "Painting",
  },
  {
    slug: "house-painting-services-nigeria",
    metaTitle: "House Painting Services in Mowe & Lagos | OB Designs",
    metaDescription: "Residential painting for homes in Mowe, Ogun State, and estates across Nigeria. Interior walls, ceilings, and full house repaints by OB Designs.",
    heading: "House Painting Services in Nigeria",
    intro: "Whether you are moving into a freshly built home in Mowe or refreshing a house in Lagos, OB Designs & Interiors LTD handles residential painting from start to finish.",
    detail: "We work directly with homeowners and property developers across Ogun State and Lagos, covering bedrooms, living spaces, kitchens, and full estate units. Because painting is only one part of what we do, we can also handle POP ceiling work, exterior wall screeding, or interior finishing in the same visit if your home needs more than just paint.",
    quoteNote: "Send us your home's size and current condition on WhatsApp, and we'll respond with a free, no-obligation quote.",
    category: "Painting",
  },
  {
    slug: "exterior-painting-nigeria",
    metaTitle: "Exterior Painting Services in Nigeria | OB Designs & Interiors",
    metaDescription: "Weather-resistant exterior painting and façade finishing in Mowe, Ogun State, and across Nigeria, using our own New Wave paint.",
    heading: "Exterior Painting Services in Nigeria",
    intro: "Exterior walls in Nigeria take the hardest beating from sun, rain, and humidity. Our New Wave paint is built to hold up under real Nigerian weather conditions.",
    detail: "Our exterior painting work covers full building façades, perimeter walls, and gate finishes in Mowe, Lagos, and Ibadan. We assess the surface first—cracks, old peeling paint, and dampness are dealt with before a single coat goes on. Because we manufacture the paint we use, we guarantee an exterior finish that lasts longer than standard brands.",
    quoteNote: "Exterior jobs are priced by building size and surface condition. Request a free quote and we can schedule a site visit in Mowe or surrounding areas.",
    category: "Exteriors",
  },
  {
    slug: "interior-designers-in-nigeria",
    metaTitle: "Interior Designers in Mowe & Nigeria | OB Designs & Interiors",
    metaDescription: "Full interior design and decorating services in Mowe, Ogun State, Lagos, and across Nigeria. Living rooms, offices, and full homes styled by OB Designs.",
    heading: "Interior Designers in Nigeria",
    intro: "Interior design at OB Designs & Interiors LTD goes beyond picking colors—we plan how a space is used in Mowe, Lagos, and across Nigeria, then execute the finishing work.",
    detail: "We've worked on living rooms, offices, and full home interiors, combining our painting, POP installation, and exterior wall screeding background with practical decor choices. Because the same company handles the design and the physical finishing work, there is no gap between what is planned and what actually gets built on site.",
    quoteNote: "Interior design pricing depends on scope—a single room versus a full home. Request a free quote to discuss your space.",
    overrideImages: [
  "/images/ob/service-1.jpg",
  "/images/ob/service-2.jpg",
  "/images/ob/service-3.jpg",
  "/images/ob/service-4.jpg",
],
  },
  {
    slug: "pop-ceiling-installation-nigeria",
    metaTitle: "POP Ceiling Installation in Nigeria | OB Designs & Interiors",
    metaDescription: "POP (Plaster of Paris) ceiling and wall installations across Mowe, Lagos, and Nigeria. Fluted panels, decorative ceilings, and repairs by OB Designs.",
    heading: "POP Ceiling Installation in Nigeria",
    intro: "POP work is one of our most requested services in Mowe, Ogun State. It is what transforms a plain ceiling into a real design feature.",
    detail: "We install decorative POP ceilings, fluted wall panels, and lighting-integrated ceiling designs for homes, churches, and commercial halls across Nigeria. Our team frames, boards, and finishes each ceiling on site, matching the design to the room rather than fitting a standard template. We serve clients in Mowe, Lagos, Ibadan, and deliver nationwide.",
    quoteNote: "POP pricing depends on ceiling size and design complexity. Request a free quote and share a photo of your space for the most accurate estimate.",
    category: "POP Installations",
  },
  {
    slug: "wall-screeding-nigeria",
    metaTitle: "Exterior Wall Screeding Services in Nigeria | OB Designs",
    metaDescription: "Professional exterior wall screeding and rendering across Mowe, Ogun State, and Nigeria. Smooth, weather-resistant finishes for buildings by OB Designs.",
    heading: "Exterior Wall Screeding Services in Nigeria",
    intro: "Wall screeding is the smooth, durable, weather-proof base that protects your exterior walls. Our screeding work is designed for Nigerian buildings, not floors.",
    detail: "We apply high-quality screeding and rendering to the *exterior walls* of residential and commercial buildings. This process smooths out rough surfaces, protects against dampness, and gives a perfect base for painting. We handle full building facades, compound walls, and gates in Mowe, Ogun State, and across Nigeria. Because we also paint, we ensure the screeding and paint work together perfectly for a long-lasting exterior finish.",
    quoteNote: "Wall screeding is priced by wall area and site condition. Request a free quote for your exterior walls today.",
    overrideImages: [
  "/images/ob/exteriorscreeding-2.jpg",
  "/images/ob/exteriorscreeding.jpg" ]
      },
  {
    slug: "new-wave-emulsion-paint-nigeria",
    metaTitle: "New Wave Emulsion Paint | OB Designs & Interiors",
    metaDescription: "New Wave emulsion paint, manufactured and sold directly by OB Designs & Interiors LTD—the same paint we use on our painting projects in Mowe and Nigeria.",
    heading: "New Wave Emulsion Paint",
    intro: "New Wave is our own emulsion paint line—not a third-party product we resell, but one we manufacture ourselves in Nigeria.",
    detail: "Because we use New Wave paint on our own painting and exterior wall screeding jobs across Mowe, Lagos, and Nigeria, we get direct, practical feedback on how it holds up in real Nigerian conditions. New Wave is available for direct purchase, whether or not you use our painting service. We deliver nationwide.",
    quoteNote: "Pricing depends on quantity and finish required. Contact us directly for current New Wave paint pricing.",
    overrideImages: ["/images/ob/paint-1.jpg"],
    isProduct: true,
  },
];
