import React, { useEffect } from "react";

export default function SEO({
  title = "Chinonyelum Chime (Nornor) | UX Designer & Researcher",
  description = "Explore the UX design and research portfolio of Chinonyelum Chime (Nornor) — creating human-centered, accessible digital experiences.",
  keywords = "UX Design, User Research, Accessibility, Interface Design, Prototyping, Usability Testing",
  canonicalUrl = "https://chinonyechime.com/",
  image = "https://chinonyechime.com/images/profile.jpg",
} = {}) {
  const metaDescription =
    description ||
    "Chinonyelum Cynthia Chime (Nornor) is a UX Designer and Researcher creating human-centered digital experiences. Explore her design portfolio featuring UX case studies, usability research, and modern interface design.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // PERSON
      {
        "@type": "Person",
        "@id": "https://chinonyechime.com/#person",
        name: "Chinonyelum Cynthia Chime",
        alternateName: "Nornor",
        url: "https://chinonyechime.com/",
        image: image,
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
        "@id": "https://chinonyechime.com/#website",
        url: "https://chinonyechime.com/",
        name: "Nornor's Portfolio",
        publisher: {
          "@id": "https://chinonyechime.com/#person",
        },
      },

      // WEBPAGE
      {
        "@type": "WebPage",
        "@id": "https://chinonyechime.com/#webpage",
        url: "https://chinonyechime.com/",
        name: "Portfolio of Chinonyelum Cynthia Chime",
        isPartOf: {
          "@id": "https://chinonyechime.com/#website",
        },
        about: {
          "@id": "https://chinonyechime.com/#person",
        },
        datePublished: "2025-01-01",
        dateModified: "2025-10-01",
        description: metaDescription,
      },

      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://chinonyechime.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://chinonyechime.com/portfolio",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    // document title
    document.title = title;

    //  meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = metaDescription;

    // meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    //structured data
    const scriptId = "structured-data-script";
    let existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.remove();
      }
    };
  }, [title, metaDescription, keywords, canonicalUrl, structuredData]);

  return null; // This component doesn't render anything
}
