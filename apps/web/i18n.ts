import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Le lingue supportate
export const locales = ["en", "it"] as const;
export const defaultLocale = "en" as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // Ottieni la locale dalla richiesta
  const locale = await requestLocale;

  // Valida che la locale esista
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
