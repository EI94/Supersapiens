import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: "div",
    section: "section",
    h1: "h1",
    p: "p",
    button: "button",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));
