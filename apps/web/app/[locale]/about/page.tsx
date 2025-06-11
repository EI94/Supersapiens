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
    title: `${locale === "it" ? "Chi Siamo" : "About Us"} | Supersapiens`,
    description: locale === "it" 
      ? "Crediamo che l'AI generativa elevi, non sostituisca mai. La nostra missione è creare il livello di astrazione dove gli umani fanno il loro lavoro migliore."
      : "We believe generative AI elevates, never replaces. Our mission is to create the abstraction layer where humans do their best work—smarter, faster, more human.",
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("nav");

  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden"
      style={{
        "--checkbox-tick-svg": "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        fontFamily: 'Inter, "Noto Sans", sans-serif'
      } as React.CSSProperties}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Supersapiens</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Prodotto" : "Product"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Soluzioni" : "Solutions"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Prezzi" : "Pricing"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Risorse" : "Resources"}
              </a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">
                {locale === "it" ? "Inizia" : "Get Started"}
              </span>
            </button>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Page Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                {locale === "it" ? "Chi Siamo" : "About Supersapiens"}
              </p>
            </div>

            {/* Main Description */}
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              {locale === "it" 
                ? "Crediamo che l'AI generativa elevi, non sostituisca mai. La nostra missione è creare il livello di astrazione dove gli umani fanno il loro lavoro migliore—più intelligenti, più veloci, più umani."
                : "We believe generative AI elevates, never replaces. Our mission is to create the abstraction layer where humans do their best work—smarter, faster, more human."}
            </p>

            {/* Our Vision Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {locale === "it" ? "La Nostra Visione" : "Our Vision"}
            </h3>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#314d68] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#314d68] focus:outline-none"
                  defaultChecked
                />
                <p className="text-white text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Tecnologia come amplificatore, non come stampella."
                    : "Technology as an amplifier, not a crutch."}
                </p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#314d68] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#314d68] focus:outline-none"
                  defaultChecked
                />
                <p className="text-white text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "AI etica fin dalla progettazione."
                    : "Ethical AI by design."}
                </p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#314d68] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#314d68] focus:outline-none"
                  defaultChecked
                />
                <p className="text-white text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Cultura dell'apprendimento continuo."
                    : "Continuous learning culture."}
                </p>
              </label>
            </div>

            {/* Our Journey Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {locale === "it" ? "Il Nostro Percorso" : "Our Journey"}
            </h3>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white" data-icon="CircleNotch" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Fondata" : "Founded"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">2024</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div className="text-white" data-icon="CircleNotch" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "25+ progetti" : "25+ projects"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">2025</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div className="text-white" data-icon="CircleNotch" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Espansione globale" : "Global expansion"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">2026</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex px-4 py-3 justify-start">
              <a href={`/${locale}/manifesto`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">
                  {locale === "it" ? "Leggi il Manifesto" : "Read the Manifesto"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 