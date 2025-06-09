"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const navigation = [
    { name: t("services"), href: "/services" },
    { name: t("caseStudies"), href: "/case-studies" },
    { name: t("team"), href: "/crew" },
    { name: t("blog"), href: "/signals" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Link href="/">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111418]">
            Supersapiens
          </h2>
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-normal text-[#111418] transition-colors hover:text-[#3d98f4]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>

        <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#3d98f4] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#3d98f4]/90">
          <span className="truncate">{t("getStarted")}</span>
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#111418] hover:bg-[#f0f2f5] focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="h-6 w-6">
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="flex flex-col justify-center space-y-1"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="block h-0.5 w-6 bg-current"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="block h-0.5 w-6 bg-current"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="block h-0.5 w-6 bg-current"
                />
              </motion.div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-full z-50 border-b border-[#f0f2f5] bg-white md:hidden"
          >
            <div className="space-y-1 px-10 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium leading-normal text-[#111418] transition-colors hover:text-[#3d98f4]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Language Switcher Mobile */}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
