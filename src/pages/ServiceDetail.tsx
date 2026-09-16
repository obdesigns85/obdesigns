import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useSEO } from "../lib/useDocumentTitle";
import { useSchema } from "../lib/useSchema";
import { servicesDetail } from "../data/servicesDetail";
import { projects } from "../data/projects";
import { business } from "../data/business";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/serviceDetail.css";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = servicesDetail.find((s) => s.slug === slug);

  useSEO({
    title: service?.metaTitle ?? "Service | OB Designs & Interiors",
    description: service?.metaDescription ?? "",
  });

  useSchema(
    service
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.heading,
          provider: {
            "@type": "LocalBusiness",
            name: business.legalName,
            telephone: `+${business.phoneWhatsApp}`,
            address: business.address,
          },
          areaServed: "Nigeria",
          url: `${business.siteUrl}/${service.slug}`,
        }
      : {},
  );

  useSchema({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://obdesigns.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://obdesigns.vercel.app/services" },
      { "@type": "ListItem", position: 3, name: service?.heading ?? "Service", item: `https://obdesigns.vercel.app/${slug}` },
    ],
  });

  useSchema(
    service?.isProduct
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: service.heading,
          description: service.metaDescription,
          brand: { "@type": "Brand", name: "New Wave" },
          manufacturer: { "@type": "Organization", name: business.legalName },
        }
      : {},
  );

  if (!service) {
    return <div style={{ padding: "4rem 1.5rem" }}>Service not found.</div>;
  }

  const galleryImages = service.overrideImages
    ? service.overrideImages.map((src) => ({ src, caption: service.heading }))
    : service.category
    ? projects
        .filter((p) => p.category === service.category)
        .map((p) => ({ src: p.image, caption: `${service.heading} — recent project` }))
    : [];

  return (
    <div className="serviceDetailPage">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.heading }]} />

      <div className="serviceHero">
        <p className="eyebrow">{business.legalName}</p>
        <h1>{service.heading}</h1>
        <p className="serviceIntro">{service.intro}</p>
      </div>

      <div className="serviceBody">
        <p>{service.detail}</p>

        <h2>Areas We Serve</h2>
        <p>
          OB Designs & Interiors LTD is based in Mowe, Ogun State, and provides{" "}
          {business.serviceArea.toLowerCase()} across Nigeria.
        </p>

        {galleryImages.length > 0 && (
          <>
            <h2>Recent Work</h2>
            <div className="serviceGallery">
              {galleryImages.map((img, i) => (
                <figure key={i}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <h2>Pricing</h2>
        <p>{service.quoteNote}</p>

        <div className="serviceContactRow">
          <a href={`tel:+${business.phoneWhatsApp}`} className="serviceContactBtn">
            <Phone size={16} /> Call {business.phoneDisplay}
          </a>
          <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer" className="serviceContactBtn whatsapp">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>

        <div className="serviceCtaBanner">
          <Link to="/consultation" className="serviceCtaBtn">Request a Free Quote</Link>
        </div>
      </div>
    </div>
  );
      }
