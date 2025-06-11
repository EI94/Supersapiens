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
    title: `${locale === "it" ? "Servizi" : "Services"} | Supersapiens`,
    description: locale === "it" 
      ? "Aiutiamo le aziende a sfruttare la potenza dell'intelligenza artificiale per guidare innovazione, efficienza e crescita."
      : "We help businesses harness the power of artificial intelligence to drive innovation, efficiency, and growth.",
  };
}

export default function ServicesPage({ params: { locale } }: Props) {
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
                {locale === "it" ? "Soluzioni" : "Solutions"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Risorse" : "Resources"}
              </a>
              <a className="text-white text-sm font-medium leading-normal" href="#">
                {locale === "it" ? "Azienda" : "Company"}
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
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEOpx4lqPM9scP3Phx0aRdRpkExjDw8L3DSeI_So-uH4hsCg_h7vkLbxgH7kO_C9pyTPSW7qshSfi-2jO5PU4CrHeQkJRcBQTh_i6WBszfWEnyqG12kNZDmGqTU7io9Ofhx83rM3tWrr3v1Z3f3KNjOetthb3Dc01LYPX35AbCY7ZAqKh2FusxAnpaUkTL21SnxxGt82tvuGDq_ugPLLOpaXVCEJbUGw5dntloCfBlbvI2U9aOjjpsabTk3-bpdH2BiJ85_JUCOMpi")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      {locale === "it" 
                        ? "Soluzioni AI per il Futuro"
                        : "AI Solutions for the Future"}
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      {locale === "it"
                        ? "Aiutiamo le aziende a sfruttare la potenza dell'intelligenza artificiale per guidare innovazione, efficienza e crescita."
                        : "We help businesses harness the power of artificial intelligence to drive innovation, efficiency, and growth."}
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">
                      {locale === "it" ? "Esplora i Nostri Servizi" : "Explore Our Services"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {locale === "it" ? "I Nostri Servizi" : "Our Services"}
            </h2>

            {/* Service 1: AI Strategy & Consulting */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Strategia AI & Consulenza" : "AI Strategy & Consulting"}
                    </p>
                    <p className="text-[#90adcb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Mappa il perché, il cosa e il come dell'AI nel tuo business."
                        : "Map the why, what and how of AI in your business."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJBcxtT_qUkA80dx3hkWQFwWg-YiaHlCnWOFLwkfCd_m_cDO_Vtf1gjTBPxdSeG7fyq65DzQF-72dUC1JczKDmLEjnzwrkmeDyeWH3rzhjBVZpiJrUM4lc3Xf6dRt0I2PmIqQTxLw4X9hRLszIX4sH3ShOFZhSd9pj0marZk8oBU8tdrbqWZjS0EqpkzQZ7fUkjGPbN0-EImd4CDlYzzFSMxdrz25-zFBXaRT-f46RzolvAkweTtM7Lqhqt6nz7EGLYJUkpgGDP5bH")'
                  }}
                />
              </div>
            </div>

            {/* Service 1 Details */}
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Audit delle opportunità" : "Opportunity audit"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Identifica le aree chiave dove l'AI può generare valore."
                    : "Identify key areas where AI can drive value."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Design della roadmap" : "Roadmap design"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Sviluppa un piano chiaro per l'implementazione dell'AI."
                    : "Develop a clear plan for AI implementation."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Governance & etica" : "Governance & ethics"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Garantisce pratiche AI responsabili ed etiche."
                    : "Ensure responsible and ethical AI practices."}
                </p>
              </div>
            </div>

            {/* Service 2: Custom AI Development */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Sviluppo AI Personalizzato" : "Custom AI Development"}
                    </p>
                    <p className="text-[#90adcb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Prototipizziamo velocemente, iteriamo ancora più velocemente e deployiamo in sicurezza."
                        : "We prototype fast, iterate faster, and deploy safely."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1H3e4efB30tkH9s05YlI-h50KS-9iHRVM0Q9I66dQFHL40hJugGbjOHmIPcZVT-A7D4-PjbOn2g4Li53THhOWalVlLOPPoIiyPuaGDw3ItRutFHQIPM76irMILoXUII_t1ZyI8wn5tz1FyZR0LEp6lxQ36B4TdNmCsI0XGU2E4VjPZdX7eLI1KsPjfqeXxwGLk6h-NqsXow8SPmdFK8gvS7P4G-IoK2Ua3hu8kZFKyfKCT3vtSFZtP07zmnP3x7DIxjarAUd6yPm4")'
                  }}
                />
              </div>
            </div>

            {/* Service 2 Details */}
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "POC → MVP → Prod" : "POC → MVP → Prod"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Sviluppa e perfeziona rapidamente soluzioni AI."
                    : "Rapidly develop and refine AI solutions."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "API di integrazione" : "Integration APIs"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Integra l'AI nei sistemi esistenti senza problemi."
                    : "Seamlessly integrate AI into existing systems."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "MLOps & monitoraggio" : "MLOps & monitoring"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Mantieni e ottimizza le performance AI nel tempo."
                    : "Maintain and optimize AI performance over time."}
                </p>
              </div>
            </div>

            {/* Service 3: AI Training & Enablement */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      {locale === "it" ? "Formazione AI & Abilitazione" : "AI Training & Enablement"}
                    </p>
                    <p className="text-[#90adcb] text-sm font-normal leading-normal">
                      {locale === "it" 
                        ? "Workshop pratici che restano impressi."
                        : "Practical workshops that stick."}
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">
                      {locale === "it" ? "Scopri di Più" : "Learn More"}
                    </span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6rqJWJ5yABSs51yHbibOpI2NQi88Q2y7JUOwTipjJQi-xYF5wkQ9mIjEh8uPrhb2olfVhZcxRUJgkAsGJxfvwHbbx9po8sLdqTRjBk7fkjmBUNOlgPDQ6e3ijxOTiHYbWlrTN8nesT6d64iVAfjmY5iK6e69b3lsF3pk0U1vuGSM8x6RtYONvWSYLhEoBadfKhFGOEXF_PZKtIMzkdeA9xrtekksQrifj-5zGgm2goA6yvPyFD7v6VHNt_Z0AVepjj3bKmRtIQlmG")'
                  }}
                />
              </div>
            </div>

            {/* Service 3 Details */}
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Briefing esecutivi" : "Executive briefings"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Educa la leadership su opportunità e implicazioni dell'AI."
                    : "Educate leadership on AI opportunities and implications."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Laboratori pratici" : "Hands-on labs"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Fornisce formazione pratica per i team tecnici."
                    : "Provide practical training for technical teams."}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314d68] py-5">
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  {locale === "it" ? "Playbook & documenti" : "Playbooks & docs"}
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {locale === "it" 
                    ? "Equipaggia i team con le risorse per il successo continuo."
                    : "Equip teams with the resources for ongoing success."}
                </p>
              </div>
            </div>

            {/* Our Process Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {locale === "it" ? "Il Nostro Processo" : "Our Process"}
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              {/* Step 1: Discover */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Scoperta" : "Discover"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Comprende i tuoi bisogni aziendali e identifica opportunità AI."
                    : "Understand your business needs and identify AI opportunities."}
                </p>
              </div>

              {/* Step 2: Design */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div className="text-white" data-icon="PencilLine" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Progettazione" : "Design"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Sviluppa una strategia AI su misura e una soluzione."
                    : "Develop a tailored AI strategy and solution."}
                </p>
              </div>

              {/* Step 3: Deploy */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div className="text-white" data-icon="RocketLaunch" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Deployment" : "Deploy"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Integra l'AI nelle tue operazioni e workflow."
                    : "Integrate AI into your operations and workflows."}
                </p>
              </div>

              {/* Step 4: Scale */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div className="text-white" data-icon="ChartLine" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  {locale === "it" ? "Scalabilità" : "Scale"}
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  {locale === "it" 
                    ? "Migliora continuamente ed espande le tue capacità AI."
                    : "Continuously improve and expand your AI capabilities."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#90adcb] text-base font-normal leading-normal min-w-40" href="#">
                  {locale === "it" ? "Privacy Policy" : "Privacy Policy"}
                </a>
                <a className="text-[#90adcb] text-base font-normal leading-normal min-w-40" href="#">
                  {locale === "it" ? "Termini di Servizio" : "Terms of Service"}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#90adcb]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#90adcb]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#90adcb] text-base font-normal leading-normal">
                © 2023 Supersapiens. {locale === "it" ? "Tutti i diritti riservati." : "All rights reserved."}
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}