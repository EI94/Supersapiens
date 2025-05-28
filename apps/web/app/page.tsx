import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
  description: "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
};

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "We help you define your AI vision, identify opportunities, and develop a roadmap for success.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCICTOasZRDVJrmessfVLU54PFeFQYo9F3KM8Q887DLa0dhSEUYwAYQZWwTXfSm8x1B4OxTSTJa2cA7Jwfi8-yR3gwi-eEjedOtPNTF4ESY7jQg3KB4fIMb-wOkBNxaUP1ooDXbaCOLL2-_W8wELzIawfmHQ4EBWvkT3r-m9loGCmMcuEwfHirDgkeygBPfqgQsG30mF6g0hJOpq42Im__1MtWWyljHJAfzX9uLe-fbZtrR0A-IEHq8tLpPDOKr8vp91uniEAvLFa3_",
  },
  {
    title: "AI Product Development",
    description: "We build custom AI solutions tailored to your specific needs, from proof-of-concept to production deployment.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzimGb5g_Ttls-UhjXQX3qQrsL0TGDKQ4ZePLSjbOaBWQol-D0-orI1wZ3XiwTjFIWPRYDmZBS0i9z6LZAA3vnY-ztCgtT5gOym9I0o6ih4cozVVk5aowdvZ4psyI_f6n4h8IClOXhIP-tSJirFcpu9mpJBS22JBikWxUs-I11HX3n0Le3Jj-vtGK6nk3M80g-0arl72GM_kHw7P4JK4NqUv7tEXSJYTDN-NJlRNcgZITzf1ioO-f49PnA_RCMavAvLaUxkjSXxIKs",
  },
  {
    title: "AI Training & Enablement",
    description: "We empower your team to leverage AI effectively through hands-on training and knowledge transfer.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwf0e6bxOoKG_us3B2dBRL4lSiHRuStXq_L-XDN788CQpm852lHZtRRS4eXFzrRZ9kuTSUpmqk8fgRO04VbcCYLvx_SEXIKqnCyulNcMIPtHK1mGrczgLZCSSCuF71vm18KEQW1dI-AxUNkuYQxD1QduL7SI3oJdXb6D8SxIbMfUc1AbZa_MP5s7VcDY2PcfEia1b5JOVZ4W9HSsOCvDS52AjzwM_mf5wVF5qrfRtHrbBP3e2L4vnT3Py1zZCbnGpJAVP1AEPl9T6I",
  },
];

const stats = [
  {
    title: "AI Solutions Deployed",
    value: "25+",
    change: "+10%",
  },
  {
    title: "Client Satisfaction",
    value: "95%",
    change: "+5%",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 justify-center py-5 px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOh82dIMvb6Y3tsR6hk_7JdQ54_cV_BxhpWfbASncXspm0X2DKNergarIFsiV64bHs6gC3tU-BaFHN02LsYH7K3jiMGoyD4S6hBpmXfj5qSeO-w9KPvyibTdrb8RE3SErMhwCeB4E8Uz2dubgkEvkOAmdlIZg7tznMGFd8tLtkyKRM1CuC6jHQ9HDsAbtt-1RihBxuTIvGfY241s6zcs_MhPt5AkVywrS8cnke9QfNpTLZM2ulb9BX67wsWtj_ASMQIHSH5C4yi76_")`,
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Generative AI Gets the Hype — You Get the Cape.
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Our Services
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {services.map((service, index) => (
              <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                  style={{ backgroundImage: `url("${service.image}")` }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{service.title}</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[#60758a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Machines generate. Humans amplify.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 p-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f0f2f5]">
              <p className="text-[#111418] text-base font-medium leading-normal">{stat.title}</p>
              <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{stat.value}</p>
              <p className="text-[#078838] text-base font-medium leading-normal">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Stay Ahead with AI Insights
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                Get the latest trends, tips, and best practices delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <input
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                  />
                  <div className="flex items-center justify-center rounded-r-lg border-l-0 border-none bg-[#f0f2f5] pr-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Subscribe</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 