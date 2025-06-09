import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
  description:
    "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
