import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    template: "%s | Supersapiens",
  },
  description:
    "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
  keywords: [
    "AI",
    "Generative AI",
    "AI Integration",
    "AI Solutions",
    "Machine Learning",
  ],
  authors: [{ name: "Supersapiens" }],
  creator: "Supersapiens",
  publisher: "Supersapiens",
  metadataBase: new URL("https://supersapiens.it"),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supersapiens.it",
    title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    description:
      "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
    siteName: "Supersapiens",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    description:
      "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
    creator: "@supersapiens_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body
        className={`${inter.className} group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="layout-container flex h-full grow flex-col">
            <TopNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
