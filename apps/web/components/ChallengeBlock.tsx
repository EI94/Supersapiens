"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";

const challenges = [
  {
    problem: "Processi manuali lenti",
    solution: "Automazione AI intelligente",
    impact: "10x più veloce",
  },
  {
    problem: "Decisioni basate su intuito",
    solution: "Insights data-driven con AI",
    impact: "95% accuratezza",
  },
  {
    problem: "Competitività in calo",
    solution: "Regenerative Reboot AI-First",
    impact: "Market leadership",
  },
];

export function ChallengeBlock() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Il Problema È Reale
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            Le aziende tradizionali stanno perdendo terreno. È tempo del{" "}
            <span className="text-accent font-semibold">Regenerative Reboot</span>.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    ❌
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {challenge.problem}
                </h3>
                <div className="my-4 border-t border-border"></div>
                <div className="mb-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    ✨
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-accent mb-2">
                  {challenge.solution}
                </h4>
                <p className="text-sm text-muted-foreground">
                  Risultato: <span className="font-semibold text-accent">{challenge.impact}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Ready for the Regenerative Reboot?
            </h3>
            <p className="text-lg text-muted-foreground">
              Non aspettare che i competitor ti superino. Inizia oggi la tua trasformazione AI-First.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 