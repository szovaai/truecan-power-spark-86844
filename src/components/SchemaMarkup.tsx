import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  type: "LocalBusiness" | "Service" | "FAQ" | "Breadcrumb";
  data: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const generateSchema = () => {
    switch (type) {
      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "Electrician"],
          "@id": "https://truecanpower.com/#identity",
          name: "TrueCan Power Systems",
          url: "https://truecanpower.com/",
          logo: "https://truecanpower.com/logo.png",
          telephone: "+1-587-317-0615",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Calgary",
            addressRegion: "AB",
            addressCountry: "CA",
          },
          areaServed: [
            { "@type": "City", name: "Calgary" },
            { "@type": "City", name: "Airdrie" },
            { "@type": "City", name: "Cochrane" },
            { "@type": "City", name: "Okotoks" },
            { "@type": "City", name: "Chestermere" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          sameAs: data.sameAs || [],
          ...data,
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `https://truecanpower.com${data.serviceUrl}#service`,
          serviceType: data.serviceType,
          provider: { "@id": "https://truecanpower.com/#identity" },
          areaServed: { "@type": "City", name: "Calgary" },
          description: data.description,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CAD",
            },
          },
          citation: data.citation || [],
        };

      case "FAQ":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };

      case "Breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
