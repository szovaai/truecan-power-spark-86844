import { Helmet } from "react-helmet-async";

const SiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": "https://truecanpower.com/#identity",
    "name": "TrueCan Power Systems",
    "alternateName": "TrueCan Power",
    "url": "https://truecanpower.com/",
    "logo": "https://truecanpower.com/assets/truecan-logo-main.png",
    "image": [
      "https://truecanpower.com/assets/team-photo.jpg",
      "https://truecanpower.com/assets/hero-electrical-v2.jpg"
    ],
    "telephone": "+1-250-883-0499",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Calgary", "sameAs": "https://en.wikipedia.org/wiki/Calgary" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.0447",
      "longitude": "-114.0719"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EV Charger Installation",
            "url": "https://truecanpower.com/services/ev-charger-installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Panel Upgrade",
            "url": "https://truecanpower.com/services/panel-upgrade"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pot Light Installation",
            "url": "https://truecanpower.com/services/pot-light-installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Tub & Sauna Wiring",
            "url": "https://truecanpower.com/services/hot-tub-sauna-wiring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Renovation Wiring",
            "url": "https://truecanpower.com/services/renovation-wiring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Electrician",
            "url": "https://truecanpower.com/services/emergency-electrician"
          }
        }
      ]
    },
    "slogan": "Power You Can Trust For Life",
    "description": "Licensed, insured, ESA-certified electricians serving Calgary and surrounding areas. Residential, commercial, and industrial electrical services with same-day availability and 24/7 emergency response.",
    "knowsAbout": [
      "Electrical Panel Upgrades",
      "EV Charger Installation",
      "Emergency Electrical Services",
      "Commercial Electrical",
      "Residential Electrical",
      "Hot Tub Wiring",
      "Pot Light Installation",
      "Renovation Electrical Work"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SiteSchema;
