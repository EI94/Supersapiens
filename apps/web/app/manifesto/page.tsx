import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto - AI-First Philosophy",
  description: "Our AI-First philosophy and approach to transforming businesses with generative AI solutions.",
};

const manifestoSections = [
  {
    title: "AI-First",
    content: "We believe that the future of business is AI-first. We help companies integrate AI into their core operations, from strategy to execution.",
  },
  {
    title: "Generative AI Experts",
    content: "Our team of experts has deep experience in generative AI, machine learning, and data science. We're passionate about helping our clients unlock the power of AI.",
  },
  {
    title: "End-to-End Solutions",
    content: "We offer a full suite of services, from strategy and design to development and deployment. We'll work with you every step of the way to ensure your AI initiatives are successful.",
  },
  {
    title: "Industry-Specific Expertise",
    content: "We have experience working with companies across a wide range of industries, including finance, healthcare, and retail. We understand the unique challenges and opportunities that each industry presents.",
  },
  {
    title: "Results-Driven Approach",
    content: "We're focused on delivering tangible results for our clients. We'll work with you to define clear goals and metrics, and we'll track our progress every step of the way.",
  },
  {
    title: "Transparent and Collaborative",
    content: "We believe in open communication and collaboration. We'll keep you informed every step of the way, and we'll work closely with your team to ensure your AI initiatives are successful.",
  },
  {
    title: "Long-Term Partnerships",
    content: "We're committed to building long-term partnerships with our clients. We'll be there to support you as your AI needs evolve.",
  },
];

export default function ManifestoPage() {
  return (
    <div className="flex flex-1 justify-center py-5 px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {manifestoSections.map((section, index) => (
          <div key={index}>
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
              {section.title}
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 