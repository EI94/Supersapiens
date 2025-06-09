import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  // Lista delle lingue supportate
  locales,

  // Lingua di default
  defaultLocale,

  // Prefix per le route (es. /en/about, /it/about)
  localePrefix: "as-needed",
});

export const config = {
  // Matcher per le route che devono essere localizzate
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
