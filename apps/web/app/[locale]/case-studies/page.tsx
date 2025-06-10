import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "nav" });

  return {
    title: `${t("caseStudies")} | Supersapiens`,
    description: "Esplora i nostri casi studio e progetti realizzati con AI",
  };
}

export default function CaseStudiesPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("nav");

  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-6 p-4">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="@[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418]">
                  {t("caseStudies")}
                </h1>
                <h2 className="@[480px]:text-base @[480px]:font-normal @[480px]:leading-normal text-sm font-normal leading-normal text-[#60758a]">
                  {locale === "it"
                    ? "Scopri come abbiamo aiutato le aziende a trasformare i loro processi con l'AI"
                    : "Discover how we've helped companies transform their processes with AI"}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#f0f2f5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#0c7ff2"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#111418]">
            {locale === "it" ? "Presto Disponibile" : "Coming Soon"}
          </h3>
          <p className="max-w-[480px] text-center text-base text-[#60758a]">
            {locale === "it"
              ? "Stiamo preparando una collezione di casi studio dettagliati che mostrano il nostro lavoro con clienti reali. Torna presto per vedere come l'AI può trasformare il tuo business."
              : "We're preparing a detailed collection of case studies showcasing our work with real clients. Check back soon to see how AI can transform your business."}
          </p>
          <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white">
            <span className="truncate">
              {locale === "it" ? "Contattaci" : "Contact Us"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
