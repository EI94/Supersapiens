import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Le lingue supportate
export const locales = ["en", "it"] as const;
export const defaultLocale = "en" as const;

export default getRequestConfig(async ({ locale }) => {
  // Valida che la locale esista
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
