import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  // Lista delle lingue supportate
  locales,

  // Lingua di default
  defaultLocale,

  // Prefix per le route (es. /en/about, /it/about)
  localePrefix: "as-needed",

  // Fallback per percorsi non localizzati
  alternateLinks: false,
});

export default function middleware(request: NextRequest) {
  // Debug logging
  console.log("Middleware called for:", request.nextUrl.pathname);

  const response = intlMiddleware(request);

  console.log(
    "Middleware response:",
    response?.status,
    response?.headers.get("location")
  );

  return response;
}

export const config = {
  // Matcher per le route che devono essere localizzate
  matcher: [
    // Includi tutti i percorsi tranne API, assets e Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
