import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TopNav } from "@/components/TopNav";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "nav" });

  return {
    title: `${locale === "it" ? "Servizi" : "Services"} | Supersapiens`,
    description:
      locale === "it"
        ? "Scopri i nostri servizi AI: strategia, sviluppo personalizzato e formazione per trasformare la tua azienda."
        : "Discover our AI services: strategy, custom development, and training to transform your business.",
  };
}

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("nav");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopNav />
      <div className="flex flex-1 justify-center px-10 py-8">
        <div className="w-full max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-gray-900">
              {locale === "it" ? "I Nostri Servizi" : "Our Services"}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              {locale === "it"
                ? "Soluzioni AI complete per trasformare il tuo business con strategia, tecnologia e competenze."
                : "Complete AI solutions to transform your business with strategy, technology, and expertise."}
            </p>
          </div>

          <div className="grid gap-12">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {locale === "it" ? "Strategia AI & Consulenza" : "AI Strategy & Consulting"}
                </h3>
                <p className="text-gray-600">
                  {locale === "it"
                    ? "Mappa il perché, il cosa e il come dell'AI nel tuo business."
                    : "Map the why, what and how of AI in your business."}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {locale === "it" ? "Sviluppo AI Personalizzato" : "Custom AI Development"}
                </h3>
                <p className="text-gray-600">
                  {locale === "it"
                    ? "Prototipizziamo velocemente, iteriamo ancora più velocemente e deployiamo in sicurezza."
                    : "We prototype fast, iterate faster, and deploy safely."}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {locale === "it" ? "Formazione AI & Abilitazione" : "AI Training & Enablement"}
                </h3>
                <p className="text-gray-600">
                  {locale === "it"
                    ? "Workshop pratici che restano impressi."
                    : "Practical workshops that stick."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">
              {locale === "it" ? "Pronto a Iniziare?" : "Ready to Get Started?"}
            </h2>
            <p className="mb-6 text-xl">
              {locale === "it"
                ? "Contattaci per scoprire come l'AI può trasformare il tuo business."
                : "Contact us to discover how AI can transform your business."}
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition-colors hover:bg-gray-100">
              {locale === "it" ? "Contattaci Ora" : "Contact Us Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 