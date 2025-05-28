export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: "customer service";
    email: string;
  };
}

export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Supersapiens",
    url: "https://supersapiens.it",
    logo: "https://supersapiens.it/logo.png",
    description:
      "Generative AI Gets the Hype — You Get the Cape. Integriamo la Generative AI nei tuoi workflow.",
    sameAs: [
      "https://linkedin.com/company/supersapiens",
      "https://twitter.com/supersapiens_ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-123-456-7890",
      contactType: "customer service",
      email: "hello@supersapiens.it",
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
}): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Organization",
      name: "Supersapiens",
    },
    publisher: {
      "@type": "Organization",
      name: "Supersapiens",
      logo: {
        "@type": "ImageObject",
        url: "https://supersapiens.it/logo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
  };
}
