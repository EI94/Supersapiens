import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">Supersapiens</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="/services">Solutions</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="/case-studies">Services</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="/signals">Resources</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="/manifesto">Company</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Contact Us</span>
            </button>
          </div>
        </header>
        
        {children}
        
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-[#49739c] text-base font-normal leading-normal">© 2024 Supersapiens. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
} 