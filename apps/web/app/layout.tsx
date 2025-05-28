import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    template: "%s | Supersapiens",
  },
  description: "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
  keywords: ["AI", "Generative AI", "AI Integration", "AI Solutions", "Machine Learning"],
  authors: [{ name: "Supersapiens" }],
  creator: "Supersapiens",
  publisher: "Supersapiens",
  metadataBase: new URL("https://supersapiens.it"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supersapiens.it",
    title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    description: "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
    siteName: "Supersapiens",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supersapiens - AI Integration Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supersapiens - Generative AI Gets the Hype — You Get the Cape",
    description: "We're an integration agency for Generative AI. We help companies like yours build and deploy AI solutions that work.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          as="style"
          onLoad={() => {}}
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
        />
      </head>
      <body 
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <TopNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 