"use client";

import { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";

const contactInfo = [
  {
    title: "Email",
    value: "hello@supersapiens.it",
    icon: "📧",
    href: "mailto:hello@supersapiens.it",
  },
  {
    title: "LinkedIn",
    value: "Supersapiens",
    icon: "💼",
    href: "https://linkedin.com/company/supersapiens",
  },
  {
    title: "Twitter",
    value: "@supersapiens_ai",
    icon: "🐦",
    href: "https://twitter.com/supersapiens_ai",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui implementeresti l'invio del form
    console.log("Form submitted:", formData);
    alert("Grazie per il tuo messaggio! Ti contatteremo presto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-20 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Ready for Your Vibe-Call?
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mx-auto max-w-3xl text-xl"
          >
            Parliamo del tuo{" "}
            <span className="text-accent font-semibold">
              Regenerative Reboot
            </span>
            . Niente vendite aggressive, solo una conversazione onesta su come
            l'AI può trasformare la tua azienda.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-card border-border rounded-lg border p-8 shadow-sm"
          >
            <h2 className="text-foreground mb-6 text-2xl font-bold">
              Iniziamo la Conversazione
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-border bg-background text-foreground focus:ring-accent w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-border bg-background text-foreground focus:ring-accent w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  placeholder="la-tua-email@azienda.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Azienda
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-border bg-background text-foreground focus:ring-accent w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  placeholder="La tua azienda"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-border bg-background text-foreground focus:ring-accent w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  placeholder="Raccontaci della tua azienda e delle sfide che stai affrontando..."
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full rounded-lg px-8 py-4 font-semibold transition-colors"
              >
                Invia Messaggio
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-foreground mb-6 text-2xl font-bold">
                Altri Modi per Contattarci
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    variants={fadeInUp}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-card hover:border-accent/50 group flex items-center space-x-4 rounded-lg border p-4 transition-colors"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <h3 className="text-foreground group-hover:text-accent font-semibold transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-accent/10 border-accent/20 rounded-lg border p-6"
            >
              <h3 className="text-accent mb-3 text-lg font-bold">
                Cosa Aspettarti dal Vibe-Call
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  Analisi gratuita dei tuoi processi attuali
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  Identificazione delle opportunità AI più impattanti
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  Roadmap personalizzata per il tuo Regenerative Reboot
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  Nessun impegno, solo valore concreto
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-muted-foreground text-sm">
                Rispondiamo entro{" "}
                <span className="text-accent font-semibold">24 ore</span> a
                tutti i messaggi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
