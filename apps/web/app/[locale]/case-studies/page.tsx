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
    description: locale === "it" 
      ? "Supersapiens aiuta le aziende lungimiranti a integrare l'AI generativa che amplifica il potenziale umano"
      : "Supersapiens helps forward-thinking companies integrate generative AI that amplifies human potential",
  };
}

export default function CaseStudiesPage({ params: { locale } }: Props) {
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
                {locale === "it" ? "Servizi" : "Services"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Casi Studio" : "Case Studies"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Risorse" : "Resources"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Chi Siamo" : "About Us"}
              </a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">
                {locale === "it" ? "Contattaci" : "Contact Us"}
              </span>
            </button>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl8cTCmZsEFOenaygdeBmGJIluprwVPIoDgnGwDQ2p1Z8CHQNvP4_xAPQfN4EOGBZtwIHj4wFyCSYfR5XVjF6m0a0sR2pawhrdYZ3-j_s9VcHliAt1aNjdgkFC0bxXahel0qUVII-pkSswWMxkVJG8qP19SLki1DOIYa9UnIWYI1i1iyjiTGwDJs-ELIltKRSMXKAgkTzdPd4TqnZMhr5LuDAmPqNWg8KpI6rhf4Iwx_r8_djLfqZetyMCIQlYOomILuWye2Lfl8iT")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      {locale === "it" 
                        ? "L'AI Generativa Ha il Clamore — Tu Ottieni il Mantello."
                        : "Generative AI Gets the Hype — You Get the Cape."}
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      {locale === "it"
                        ? "Supersapiens aiuta le aziende lungimiranti a integrare l'AI generativa che amplifica il potenziale umano."
                        : "Supersapiens helps forward‑thinking companies integrate generative AI that amplifies human potential."}
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">
                      {locale === "it" ? "Inizia il Tuo Viaggio AI" : "Start Your AI Journey"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {locale === "it" ? "I Nostri Servizi" : "Our Services"}
            </h2>
            
            {/* Service 1 */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Strategia AI & Consulenza" : "AI Strategy & Consulting"}
                    </p>
                    <p className="text-[#90aecb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Definisci la visione, mappa le opportunità, crea la tua roadmap AI."
                        : "Define vision, map opportunities, craft your AI roadmap."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9S380JyRfpDGB2aTBR06NPmCUQnL5fLcOZp7q7sSP-pnmKFwyO86mXU_ya3kEr46i4EEft2tSkk-AbRIl86S63Qp_4yh7Ak_Waz5HHlAcOEKJD2X7KKDTNqyhj_1egVTH2SLQzK2l183T7dbOgGbTMzw2mZCWPb_VxiGuy0Rgn1Zi0tmX5pQzaE0JxZ2b_rY1d-5QAWPgytwXUa2zaXFVoP3EAj0pb7fAU5R-AHb0P315iqO3hh3Z-W3laf-7l0Y-aloRi2km5tSB")'
                  }}
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Sviluppo AI Personalizzato" : "Custom AI Development"}
                    </p>
                    <p className="text-[#90aecb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Dal proof-of-concept ai modelli pronti per la produzione su misura per te."
                        : "From proof‑of‑concept to production‑ready models tailored to you."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZJDwOKa6ICa33ia_OVBL4XACkOssJgPS0_i3FYB7EpH-ojMGrt2-1Iq3mnuU2Wp608ntgnnTdo8uyaNFEVay2ksZpiHlUHYS3Vq6ZwiOZnLqUopR-KKJ8nYcRgOKP5YvQTREVJTRmA5AWwEpm9Oo2gsG8jPAj-Sm8wndUuz0gsgBxwUdosufUOzVD-aEjWNps1hXU3QXTKUki-3aMHUbEeREIM2F1tIua0Sc3ElVZTBKEVoew-6hoghh-USRLQ1t4krgHRX-sqBVs")'
                  }}
                />
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Formazione AI & Abilitazione" : "AI Training & Enablement"}
                    </p>
                    <p className="text-[#90aecb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Aggiorna i team con workshop pratici e trasferimento di conoscenze."
                        : "Upskill teams with hands‑on workshops and knowledge transfer."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO2R5imKwBY-yARDKyLP3U_QmVW41Cmw9MQH_2gbDoIDR2icvGrt8NCXxBgxKF_87WbxiWlLm3_HY69B5ngV2kiclV342877ofY04DpLTOIkmaqNak0hvdLDFxoVx0BS8fOr71H_1R9FqMrkpKUuN0_OXxoq3buhuSEqRsHFOYB3-eQuQ-NltXtGQqLJokan7Nxcf3v2UIv6jiqwSaryAKAUNCciJEQAGXeVFK2573tcVFCP-CXumtU7jXL_u5JbHVAM0inbMjcOol")'
                  }}
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#223649]">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Soluzioni AI consegnate" : "AI solutions delivered"}
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">25+</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#223649]">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Soddisfazione cliente" : "Customer satisfaction"}
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">95%</p>
              </div>
            </div>

            {/* Quote Section */}
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {locale === "it" 
                ? "Le macchine generano. Gli umani amplificano."
                : "Machines generate. Humans amplify."}
            </h2>

            {/* Newsletter Section */}
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    {locale === "it" 
                      ? "Rimani Aggiornato con le Ultime Novità AI"
                      : "Stay Ahead with AI Insights"}
                  </h1>
                </div>
                <div className="flex flex-1 justify-center">
                  <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <input
                        placeholder={locale === "it" ? "Inserisci la tua email" : "Enter your email"}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90aecb] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        defaultValue=""
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#223649] pr-2">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                          <span className="truncate">
                            {locale === "it" ? "Iscriviti" : "Subscribe"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#90aecb]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#90aecb]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#90aecb] text-base font-normal leading-normal">
                © 2024 Supersapiens. {locale === "it" ? "Tutti i diritti riservati." : "All rights reserved."}
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
