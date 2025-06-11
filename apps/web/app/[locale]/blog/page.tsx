import { useTranslations } from "next-intl";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: locale === "it" ? "Blog - Supersapiens" : "Blog - Supersapiens",
    description:
      locale === "it"
        ? "Articoli e approfondimenti su AI e innovazione"
        : "Articles and insights on AI and innovation",
  };
}

const blogArticles = [
  {
    id: 1,
    category: "Strategy",
    title: {
      en: "Navigating the AI Landscape: A Strategic Guide for Businesses",
      it: "Navigare nel Panorama AI: Una Guida Strategica per le Aziende",
    },
    description: {
      en: "This article provides a comprehensive overview of AI strategies for businesses, covering key considerations, best practices, and real-world examples of successful implementations.",
      it: "Questo articolo fornisce una panoramica completa delle strategie AI per le aziende, coprendo considerazioni chiave, best practices ed esempi reali di implementazioni di successo.",
    },
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    category: "Tech",
    title: {
      en: "The Evolution of AI: From Theory to Practical Applications",
      it: "L'Evoluzione dell'AI: Dalla Teoria alle Applicazioni Pratiche",
    },
    description: {
      en: "Explore the journey of AI from its theoretical origins to its current practical applications across various industries, highlighting key milestones and breakthroughs.",
      it: "Esplora il viaggio dell'AI dalle sue origini teoriche alle attuali applicazioni pratiche in vari settori, evidenziando tappe fondamentali e scoperte.",
    },
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    category: "Culture",
    title: {
      en: "AI and the Human Element: Fostering a Collaborative Culture",
      it: "AI e l'Elemento Umano: Promuovere una Cultura Collaborativa",
    },
    description: {
      en: "Discover how to cultivate a collaborative culture that embraces AI, ensuring seamless integration and maximizing the benefits of AI technologies within your organization.",
      it: "Scopri come coltivare una cultura collaborativa che abbraccia l'AI, garantendo un'integrazione senza soluzione di continuità e massimizzando i benefici delle tecnologie AI nella tua organizzazione.",
    },
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    category: "Strategy",
    title: {
      en: "Building a Future-Proof AI Strategy: Key Considerations",
      it: "Costruire una Strategia AI a Prova di Futuro: Considerazioni Chiave",
    },
    description: {
      en: "This article outlines essential considerations for developing an AI strategy that can adapt to future changes and advancements in technology, ensuring long-term success.",
      it: "Questo articolo delinea considerazioni essenziali per sviluppare una strategia AI che può adattarsi ai cambiamenti futuri e ai progressi tecnologici, garantendo successo a lungo termine.",
    },
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    category: "Tech",
    title: {
      en: "Demystifying AI: A Technical Deep Dive into Core Concepts",
      it: "Demistificare l'AI: Un Approfondimento Tecnico sui Concetti Fondamentali",
    },
    description: {
      en: "Gain a deeper understanding of AI with this technical deep dive into core concepts, including machine learning, neural networks, and natural language processing.",
      it: "Ottieni una comprensione più profonda dell'AI con questo approfondimento tecnico sui concetti fondamentali, inclusi machine learning, reti neurali e elaborazione del linguaggio naturale.",
    },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    category: "Culture",
    title: {
      en: "The Ethical Implications of AI: A Cultural Perspective",
      it: "Le Implicazioni Etiche dell'AI: Una Prospettiva Culturale",
    },
    description: {
      en: "Examine the ethical considerations surrounding AI from a cultural perspective, addressing issues such as bias, privacy, and the impact on society.",
      it: "Esamina le considerazioni etiche che circondano l'AI da una prospettiva culturale, affrontando questioni come bias, privacy e impatto sulla società.",
    },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

const tags = [
  { key: "strategy", label: { en: "Strategy", it: "Strategia" } },
  { key: "tech", label: { en: "Tech", it: "Tecnologia" } },
  { key: "culture", label: { en: "Culture", it: "Cultura" } },
  { key: "innovation", label: { en: "Innovation", it: "Innovazione" } },
  { key: "trends", label: { en: "Trends", it: "Tendenze" } },
];

export default function BlogPage({ params: { locale } }: Props) {
  const t = useTranslations("blog");

  return (
    <div
      className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#101a23]"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">
              Supersapiens
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-sm font-medium leading-normal text-white"
                href="#"
              >
                Solutions
              </a>
              <a
                className="text-sm font-medium leading-normal text-white"
                href="#"
              >
                Services
              </a>
              <a
                className="text-sm font-medium leading-normal text-white"
                href="#"
              >
                Resources
              </a>
              <a
                className="text-sm font-medium leading-normal text-white"
                href="#"
              >
                Company
              </a>
            </div>
            <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 justify-center gap-1 px-6 py-5">
          <div className="layout-content-container flex max-w-[920px] flex-1 flex-col">
            {/* Hero Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="tracking-light text-[32px] font-bold leading-tight text-white">
                  {t("hero.title")}
                </p>
                <p className="text-sm font-normal leading-normal text-[#90adcb]">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>

            {/* Blog Articles */}
            {blogArticles.map((article) => (
              <div key={article.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-normal leading-normal text-[#90adcb]">
                        {t(`categories.${article.category.toLowerCase()}`)}
                      </p>
                      <p className="text-base font-bold leading-tight text-white">
                        {locale === "it" ? article.title.it : article.title.en}
                      </p>
                      <p className="text-sm font-normal leading-normal text-[#90adcb]">
                        {locale === "it"
                          ? article.description.it
                          : article.description.en}
                      </p>
                    </div>
                    <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg bg-[#223649] px-4 text-sm font-medium leading-normal text-white">
                      <span className="truncate">{t("readMore")}</span>
                    </button>
                  </div>
                  <div
                    className="aspect-video w-full flex-1 rounded-lg bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${article.image}")` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="layout-content-container flex w-[360px] flex-col">
            {/* Search */}
            <div className="px-4 py-3">
              <label className="flex h-12 w-full min-w-40 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div className="flex items-center justify-center rounded-l-lg border-r-0 border-none bg-[#223649] pl-4 text-[#90adcb]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder={t("search.placeholder")}
                    className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#223649] px-4 pl-2 text-base font-normal leading-normal text-white placeholder:text-[#90adcb] focus:border-none focus:outline-0 focus:ring-0"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>

            {/* Tags */}
            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
              {t("tags.title")}
            </h3>
            <div className="flex flex-wrap gap-3 p-3 pr-4">
              {tags.map((tag) => (
                <div
                  key={tag.key}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4"
                >
                  <p className="text-sm font-medium leading-normal text-white">
                    {locale === "it" ? tag.label.it : tag.label.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
