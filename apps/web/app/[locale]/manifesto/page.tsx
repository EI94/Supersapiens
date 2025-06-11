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
    title: `${locale === "it" ? "Manifesto" : "Manifesto"} | Supersapiens`,
    description: locale === "it" 
      ? "Non siamo sostituiti – siamo amplificati. Supersapiens esiste per riscrivere la narrativa: l'AI è il nostro amplificatore, mai il nostro avversario."
      : "We Are Not Replaced – We Are Amplified. Supersapiens exists to rewrite the narrative: AI is our amplifier, never our adversary.",
  };
}

export default function ManifestoPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("nav");

  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden" 
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
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
                {locale === "it" ? "Risorse" : "Resources"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Prezzi" : "Pricing"}
              </a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">
                {locale === "it" ? "Contatta Vendite" : "Contact Sales"}
              </span>
            </button>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Main Title */}
            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
              {locale === "it" 
                ? "Non Siamo Sostituiti – Siamo Amplificati."
                : "We Are Not Replaced – We Are Amplified."}
            </h1>

            {/* Description */}
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              {locale === "it"
                ? "Supersapiens esiste per riscrivere la narrativa: l'AI è il nostro amplificatore, mai il nostro avversario. Ecco cosa rappresentiamo."
                : "Supersapiens exists to rewrite the narrative: AI is our amplifier, never our adversary. Here's what we stand for."}
            </p>

            {/* Principle 1 */}
            <div className="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="NumberCircleOne" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM140,80v96a8,8,0,0,1-16,0V95l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,140,80Z" />
                </svg>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                {locale === "it" 
                  ? "Le macchine generano, gli umani elevano."
                  : "Machines generate, humans elevate."}
              </p>
            </div>

            {/* Principle 2 */}
            <div className="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="NumberCircleTwo" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm25.56-92.74L120,168h32a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93Z" />
                </svg>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                {locale === "it" 
                  ? "Maestria oltre il clamore."
                  : "Craft over hype."}
              </p>
            </div>

            {/* Principle 3 */}
            <div className="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="NumberCircleThree" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm32-64a36,36,0,0,1-61.71,25.19A8,8,0,1,1,109.71,166,20,20,0,1,0,124,132a8,8,0,0,1-6.55-12.59L136.63,92H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36.07,36.07,0,0,1,160,152Z" />
                </svg>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                {locale === "it" 
                  ? "Responsabilità in ogni riga di codice."
                  : "Accountability in every line of code."}
              </p>
            </div>

            {/* Principle 4 */}
            <div className="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="NumberCircleFour" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-72a8,8,0,0,1-8,8h-8v24a8,8,0,0,1-16,0V152H96a8,8,0,0,1-7.59-10.53l24-72a8,8,0,0,1,15.18,5.06L107.1,136H136V112a8,8,0,0,1,16,0v24h8A8,8,0,0,1,168,144Z" />
                </svg>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                {locale === "it" 
                  ? "La diversità alimenta algoritmi migliori."
                  : "Diversity fuels better algorithms."}
              </p>
            </div>

            {/* Principle 5 */}
            <div className="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="NumberCircleFive" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM118.78,88l-4.19,25.14A38.8,38.8,0,0,1,124,112a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16Z" />
                </svg>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                {locale === "it" 
                  ? "L'apprendimento è perpetuo."
                  : "Learning is perpetual."}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">
                  {locale === "it" 
                    ? "Pronto ad amplificare? Costruiamo insieme."
                    : "Ready to amplify? Let's build together."}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}