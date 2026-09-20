import { Link } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useSEO } from "../lib/useDocumentTitle";
import { useSchema } from "../lib/useSchema";
import { servicesDetail } from "../data/servicesDetail";
import { projects } from "../data/projects";
import { business } from "../data/business";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/services.css";

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
          url: `https://obdesigns.com.ng/${service.slug}`,
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

  const galleryImages = service.category
    ? projects
        .filter((p) => p.category === service.category)
        .map((p) => ({ src: p.image, caption: `${service.heading} — recent project` }))
    : service.overrideImage
    ? [{ src: service.overrideImage, caption: service.heading }]
    : [];

  return (
    <div className="serviceDetailPage">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.heading }]} />

      <div className="serviceDetailHero">
        <p className="eyebrow">{business.legalName}</p>
        <div className="heroAccentLine" />
        <h1>{service.heading}</h1>
        <p className="serviceDetailIntro">{service.intro}</p>
      </div>

      <div className="serviceDetailBody">
        <div className="serviceMainContent">
          <h2>Overview</h2>
          <p>{service.detail}</p>

          <h2>Areas We Serve</h2>
          <p>
            Based in Mowe, Ogun State, we provide {business.serviceArea} across Nigeria. 
          </p>

          <h2>What's Included</h2>
          <ul className="serviceFeatures">
            <li><CheckCircle2 size={18} color="var(--red)" /> Owner personally oversees every project</li>
            <li><CheckCircle2 size={18} color="var(--red)" /> High-quality materials and New Wave paint used</li>
            <li><CheckCircle2 size={18} color="var(--red)" /> Clean, professional finish guaranteed</li>
          </ul>

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
        </div>

        {galleryImages.length > 0 && (
          <div className="serviceGallerySection">
            <h2>Recent Work</h2>
            <div className="serviceGallery">
              {galleryImages.map((img, i) => (
                <figure key={i}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="serviceCtaBanner">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Get a free, no-obligation quote today.</p>
          </div>
          <Link to="/consultation" className="serviceCtaBtn">Request a Free Quote →</Link>
        </div>
      </div>
    </div>
  );
       }
