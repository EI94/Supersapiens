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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          className="text-center mb-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            Ready for Your Vibe-Call?
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Parliamo del tuo <span className="text-accent font-semibold">Regenerative Reboot</span>. 
            Niente vendite aggressive, solo una conversazione onesta su come l'AI può trasformare la tua azienda.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Iniziamo la Conversazione
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="la-tua-email@azienda.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Azienda
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="La tua azienda"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Raccontaci della tua azienda e delle sfide che stai affrontando..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
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
              <h2 className="text-2xl font-bold text-foreground mb-6">
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
                    className="flex items-center space-x-4 p-4 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors group"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
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
              className="bg-accent/10 border border-accent/20 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-accent mb-3">
                Cosa Aspettarti dal Vibe-Call
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2 text-accent">✓</span>
                  Analisi gratuita dei tuoi processi attuali
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">✓</span>
                  Identificazione delle opportunità AI più impattanti
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">✓</span>
                  Roadmap personalizzata per il tuo Regenerative Reboot
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">✓</span>
                  Nessun impegno, solo valore concreto
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground">
                Rispondiamo entro <span className="font-semibold text-accent">24 ore</span> a tutti i messaggi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 