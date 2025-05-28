import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
  description:
    "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
};

const services = [
  {
    title: "AI Strategy & Consulting",
    description:
      "We help you define your AI vision, identify opportunities, and develop a roadmap for success.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCICTOasZRDVJrmessfVLU54PFeFQYo9F3KM8Q887DLa0dhSEUYwAYQZWwTXfSm8x1B4OxTSTJa2cA7Jwfi8-yR3gwi-eEjedOtPNTF4ESY7jQg3KB4fIMb-wOkBNxaUP1ooDXbaCOLL2-_W8wELzIawfmHQ4EBWvkT3r-m9loGCmMcuEwfHirDgkeygBPfqgQsG30mF6g0hJOpq42Im__1MtWWyljHJAfzX9uLe-fbZtrR0A-IEHq8tLpPDOKr8vp91uniEAvLFa3_",
  },
  {
    title: "AI Product Development",
    description:
      "We build custom AI solutions tailored to your specific needs, from proof-of-concept to production deployment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzimGb5g_Ttls-UhjXQX3qQrsL0TGDKQ4ZePLSjbOaBWQol-D0-orI1wZ3XiwTjFIWPRYDmZBS0i9z6LZAA3vnY-ztCgtT5gOym9I0o6ih4cozVVk5aowdvZ4psyI_f6n4h8IClOXhIP-tSJirFcpu9mpJBS22JBikWxUs-I11HX3n0Le3Jj-vtGK6nk3M80g-0arl72GM_kHw7P4JK4NqUv7tEXSJYTDN-NJlRNcgZITzf1ioO-f49PnA_RCMavAvLaUxkjSXxIKs",
  },
  {
    title: "AI Training & Enablement",
    description:
      "We empower your team to leverage AI effectively through hands-on training and knowledge transfer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwf0e6bxOoKG_us3B2dBRL4lSiHRuStXq_L-XDN788CQpm852lHZtRRS4eXFzrRZ9kuTSUpmqk8fgRO04VbcCYLvx_SEXIKqnCyulNcMIPtHK1mGrczgLZCSSCuF71vm18KEQW1dI-AxUNkuYQxD1QduL7SI3oJdXb6D8SxIbMfUc1AbZa_MP5s7VcDY2PcfEia1b5JOVZ4W9HSsOCvDS52AjzwM_mf5wVF5qrfRtHrbBP3e2L4vnT3Py1zZCbnGpJAVP1AEPl9T6I",
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
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="@[480px]:gap-8 @[480px]:rounded-lg flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOh82dIMvb6Y3tsR6hk_7JdQ54_cV_BxhpWfbASncXspm0X2DKNergarIFsiV64bHs6gC3tU-BaFHN02LsYH7K3jiMGoyD4S6hBpmXfj5qSeO-w9KPvyibTdrb8RE3SErMhwCeB4E8Uz2dubgkEvkOAmdlIZg7tznMGFd8tLtkyKRM1CuC6jHQ9HDsAbtt-1RihBxuTIvGfY241s6zcs_MhPt5AkVywrS8cnke9QfNpTLZM2ulb9BX67wsWtj_ASMQIHSH5C4yi76_")`,
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="@[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-4xl font-black leading-tight tracking-[-0.033em] text-white">
                  Generative AI Gets the Hype — You Get the Cape.
                </h1>
                <h2 className="@[480px]:text-base @[480px]:font-normal @[480px]:leading-normal text-sm font-normal leading-normal text-white">
                  We're an integration agency for Generative AI. We help
                  companies like yours build and deploy AI solutions that work.
                </h2>
              </div>
              <button className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#111418]">
          Our Services
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch gap-3 p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex h-full min-w-60 flex-1 flex-col gap-4 rounded-lg"
              >
                <div
                  className="flex aspect-square w-full flex-col rounded-lg bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${service.image}")` }}
                ></div>
                <div>
                  <p className="text-base font-medium leading-normal text-[#111418]">
                    {service.title}
                  </p>
                  <p className="text-sm font-normal leading-normal text-[#60758a]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="px-4 pb-3 pt-1 text-center text-sm font-normal leading-normal text-[#60758a]">
          Machines generate. Humans amplify.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg bg-[#f0f2f5] p-6"
            >
              <p className="text-base font-medium leading-normal text-[#111418]">
                {stat.title}
              </p>
              <p className="tracking-light text-2xl font-bold leading-tight text-[#111418]">
                {stat.value}
              </p>
              <p className="text-base font-medium leading-normal text-[#078838]">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="@container">
          <div className="@[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 flex flex-col justify-end gap-6 px-4 py-10">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="tracking-light @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] text-[32px] font-bold leading-tight text-[#111418]">
                Stay Ahead with AI Insights
              </h1>
              <p className="max-w-[720px] text-base font-normal leading-normal text-[#111418]">
                Get the latest trends, tips, and best practices delivered to
                your inbox.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <label className="@[480px]:h-16 flex h-14 min-w-40 max-w-[480px] flex-1 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <input
                    placeholder="Enter your email"
                    className="form-input @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border-r-0 border-none bg-[#f0f2f5] px-4 pr-2 text-sm font-normal leading-normal text-[#111418] placeholder:text-[#60758a] focus:border-none focus:outline-0 focus:ring-0"
                  />
                  <div className="flex items-center justify-center rounded-r-lg border-l-0 border-none bg-[#f0f2f5] pr-2">
                    <button className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
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
