import { about, experience, projects, site } from "@/data/content";

const featuredProjects = projects.slice(0, 8);

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;
  const webpageId = `${site.url}/#webpage`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${site.url}/`,
        name: site.name,
        alternateName: [...site.alternateName],
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": webpageId,
        url: `${site.url}/`,
        name: `${site.name} | ${site.title} — Computer Vision & Digital Twins`,
        description: site.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
        dateModified: new Date().toISOString().slice(0, 10),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        givenName: site.givenName,
        familyName: site.familyName,
        alternateName: [...site.alternateName],
        jobTitle: site.title,
        description: about.summary,
        url: `${site.url}/`,
        image: `${site.url}/img/profile-black.png`,
        email: `mailto:${site.email}`,
        sameAs: [site.github, site.linkedin],
        knowsLanguage: ["en"],
        knowsAbout: [...site.knowsAbout],
        hasOccupation: {
          "@type": "Occupation",
          name: site.title,
          skills: "Computer Vision, NLP, Digital Twins, Unreal Engine, Python",
        },
        worksFor: experience
          .filter((item) => /Present/i.test(item.date))
          .map((item) => ({
            "@type": "Organization",
            name: item.company,
          })),
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#projects-list`,
        name: "Selected AI and Unreal Engine projects",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: featuredProjects.length,
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: `${site.url}/#projects`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: about.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
