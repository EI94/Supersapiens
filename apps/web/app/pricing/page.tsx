import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AI Solutions Plans",
  description: "Choose the perfect AI solution plan for your business needs. Transparent pricing for all our AI services.",
};

export default function PricingPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Pricing
          </p>
        </div>
        
        <div className="p-4">
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1">
            Our pricing plans are designed to scale with your business. Contact our sales team to discuss custom enterprise solutions.
          </p>
          
          <div className="flex px-0 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Contact Sales</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 