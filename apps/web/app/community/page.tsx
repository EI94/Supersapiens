import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Join the AI Revolution",
  description: "Connect with AI enthusiasts, share insights, and collaborate on the future of artificial intelligence.",
};

export default function CommunityPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Community
          </p>
        </div>
        
        <div className="p-4">
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1">
            Join our vibrant community of AI enthusiasts, developers, and business leaders. Share insights, collaborate on projects, and stay at the forefront of AI innovation.
          </p>
          
          <div className="flex px-0 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Join Community</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 