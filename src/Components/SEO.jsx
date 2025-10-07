import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO() {
  const metaDescription =
    "Chinonyelum Cynthia Chime (Nornor) is a UX Designer and Researcher creating human-centered digital experiences. Explore her design portfolio featuring UX case studies, usability research, and modern interface design.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // PERSON
      {
        "@type": "Person",
        "@id": "https://nonor-s-portfolio-l26i.vercel.app/#person",
        name: "Chinonyelum Cynthia Chime",
        alternateName: "Nornor",
        url: "https://nonor-s-portfolio-l26i.vercel.app/",
        image: "https://nonor-s-portfolio-l26i.vercel.app/images/profile.jpg", // Add your hosted profile image
        jobTitle: "UX Designer & UX Researcher",
        worksFor: {
          "@type": "Organization",
          name: "Tech Women Nigeria",
        },
        sameAs: [
          "https://linkedin.com/in/chinonyelum-chime-a4b0a4166",
          "https://www.behance.net/chinonychime",
          "https://dribbble.com/nornor",
        ],
        knowsAbout: [
          "User Experience Design",
          "User Research",
          "Prototyping",
          "Accessibility",
          "Usability Testing",
          "Responsive Design",
          "Interface Design",
        ],
        description: metaDescription,
      },

      // WEBSITE
      {
        "@type": "WebSite",
        "@id": "https://nonor-s-portfolio-l26i.vercel.app/#website",
        url: "https://nonor-s-portfolio-l26i.vercel.app/",
        name: "Nornor’s Portfolio",
        publisher: {
          "@id": "https://nonor-s-portfolio-l26i.vercel.app/#person",
        },
      },

      // WEBPAGE
      {
        "@type": "WebPage",
        "@id": "https://nonor-s-portfolio-l26i.vercel.app/#webpage",
        url: "https://nonor-s-portfolio-l26i.vercel.app/",
        name: "Portfolio of Chinonyelum Cynthia Chime",
        isPartOf: {
          "@id": "https://nonor-s-portfolio-l26i.vercel.app/#website",
        },
        about: {
          "@id": "https://nonor-s-portfolio-l26i.vercel.app/#person",
        },
        datePublished: "2025-01-01",
        dateModified: "2025-10-01",
        description:
          "Explore the UX design and research work of Chinonyelum Cynthia Chime (Nornor). A showcase of human-centered projects, prototypes, and design systems.",
      },

      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nonor-s-portfolio-l26i.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://nonor-s-portfolio-l26i.vercel.app/portfolio",
          },
        ],
      },
    ],
  };

  return (
    <Helmet>
      <title>Chinonyelum Chime (Nornor) | UX Designer & Researcher</title>
      <meta
        name="description"
        content="Explore the UX design and research portfolio of Chinonyelum Chime (Nornor) — creating human-centered, accessible digital experiences."
      />
      <meta
        name="keywords"
        content="UX Design, User Research, Accessibility, Interface Design, Prototyping, Usability Testing"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
