import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "nav" });

  return {
    title: `${locale === "it" ? "Chi Siamo" : "About Us"} | Supersapiens`,
    description:
      locale === "it"
        ? "Crediamo che l'AI generativa elevi, non sostituisca mai. La nostra missione è creare il livello di astrazione dove gli umani fanno il loro lavoro migliore."
        : "We believe generative AI elevates, never replaces. Our mission is to create the abstraction layer where humans do their best work—smarter, faster, more human.",
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("nav");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopNav />
      
      <div className="flex flex-1 justify-center px-10 py-8">
        <div className="w-full max-w-7xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-gray-900">
              Chi Siamo
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Siamo il ponte tra l'intelligenza artificiale e il successo della tua azienda. 
              Con esperienza consolidata e visione innovativa, trasformiamo le potenzialità dell'AI in risultati concreti.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">La Nostra Missione</h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Crediamo che l'intelligenza artificiale non debba sostituire l'ingegno umano, 
                ma amplificarlo. La nostra missione è guidare le aziende attraverso la 
                trasformazione digitale, garantendo che ogni implementazione AI sia strategica, 
                etica e orientata ai risultati.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Non siamo solo consulenti tecnologici: siamo partner strategici che 
                comprendono le sfide uniche del tuo business e sviluppano soluzioni 
                su misura per il tuo successo.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">I Nostri Valori</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Innovazione</h3>
                <p className="text-gray-600">
                  Rimaniamo sempre all'avanguardia delle tecnologie AI per offrirti 
                  soluzioni che definiscono il futuro del tuo settore.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Trasparenza</h3>
                <p className="text-gray-600">
                  Crediamo nella comunicazione chiara e onesta. Ogni progetto è 
                  caratterizzato da totale trasparenza sui processi e sui risultati.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Collaborazione</h3>
                <p className="text-gray-600">
                  Il successo nasce dalla partnership. Lavoriamo fianco a fianco 
                  con i tuoi team per garantire risultati duraturi.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Il Nostro Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 relative h-48 w-48 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&auto=format&fm=webp&q=80"
                    alt="CEO"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Marco Alberti</h3>
                <p className="mb-3 text-blue-600">CEO & Founder</p>
                <p className="text-sm text-gray-600">
                  Esperto in strategia AI con oltre 10 anni di esperienza nella trasformazione digitale.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative h-48 w-48 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616c1a25ce0?w=300&h=300&fit=crop&crop=faces&auto=format&fm=webp&q=80"
                    alt="CTO"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Sofia Chen</h3>
                <p className="mb-3 text-blue-600">CTO</p>
                <p className="text-sm text-gray-600">
                  Architetto AI con expertise in machine learning e sviluppo di sistemi scalabili.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative h-48 w-48 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces&auto=format&fm=webp&q=80"
                    alt="Lead Developer"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Alessandro Bianchi</h3>
                <p className="mb-3 text-blue-600">Lead AI Developer</p>
                <p className="text-sm text-gray-600">
                  Specialista in implementazione AI con focus su soluzioni enterprise e integration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Pronto a Trasformare la Tua Azienda?</h2>
            <p className="mb-6 text-xl">
              Scopri come l'intelligenza artificiale può rivoluzionare il tuo business.
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition-colors hover:bg-gray-100">
              Contattaci Oggi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
