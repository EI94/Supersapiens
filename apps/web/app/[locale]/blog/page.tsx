import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";

interface Props {
  params: {
    locale: string;
  };
}

export default function BlogPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("blog");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopNav />
      <div className="flex flex-1 justify-center px-10 py-8">
        <div className="w-full max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            {t("hero.title")}
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            {t("hero.subtitle")}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Sample Blog Post
                </h2>
                <p className="text-gray-600">
                  This is a sample blog post to show the layout.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
} 