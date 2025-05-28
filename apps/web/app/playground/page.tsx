import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground - Experience AI Solutions",
  description:
    "Experience the power of our AI solutions firsthand. Interact with live AI agents and explore their capabilities.",
};

export default function PlaygroundPage() {
  return (
    <div className="flex flex-1 justify-center gap-1 px-6 py-5">
      <div className="layout-content-container flex max-w-[920px] flex-1 flex-col">
        <h2 className="tracking-light px-4 pb-3 pt-5 text-left text-[28px] font-bold leading-tight text-[#111418]">
          Playground
        </h2>
        <p className="px-4 pb-3 pt-1 text-base font-normal leading-normal text-[#111418]">
          Experience the power of our AI solutions firsthand. Our Playground
          offers a dynamic environment where you can interact with a live AI
          agent, explore its capabilities, and see how it can transform your
          business. Dive in and discover the future of intelligent automation.
        </p>
        <div className="flex justify-start px-4 py-3">
          <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0c7ff2] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
            <span className="truncate">Test-Drive</span>
          </button>
        </div>
      </div>

      <div className="layout-content-container flex w-[360px] flex-col">
        <div className="p-4">
          <div
            className="relative flex aspect-video items-center justify-center rounded-lg bg-[#111418] bg-cover bg-center p-4"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPmoZPFWlTMXyh7OgtDqHJoC0YxlnS7Thvq1-G6-w2dlCYoXggwAOUwwj9EASnOGaeBQbCW6ZrW-ToE3xXaWEMaf_QfpJlDAOBi4CnSZNllVg3cn83St1C9Lo1UFRhRz-USdZP4PJx5Ac0Rrf4ZxCo6l79KyIyc5_jZTtAp2GBiBgsiKQrp2vj5hDx5pjwMYQh3WNhyOAtQoVS8nkIb7z2WRIU9CH91fJ82WbD7JDdBB-aKhkh0KVxwOW3ALMl1gD0p5vAuwlX_Fty")',
            }}
          >
            <button className="flex size-16 shrink-0 items-center justify-center rounded-full bg-black/40 text-white">
              <div
                className="text-inherit"
                data-icon="Play"
                data-size="24px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
