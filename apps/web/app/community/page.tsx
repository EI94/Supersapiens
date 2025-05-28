import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Join the AI Revolution",
  description:
    "Connect with AI enthusiasts, share insights, and collaborate on the future of artificial intelligence.",
};

export default function CommunityPage() {
  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="tracking-light min-w-72 text-[32px] font-bold leading-tight text-[#111418]">
            Community
          </p>
        </div>

        <div className="p-4">
          <p className="pb-3 pt-1 text-base font-normal leading-normal text-[#111418]">
            Join our vibrant community of AI enthusiasts, developers, and
            business leaders. Share insights, collaborate on projects, and stay
            at the forefront of AI innovation.
          </p>

          <div className="flex justify-start px-0 py-3">
            <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
              <span className="truncate">Join Community</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
