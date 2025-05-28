"use client";

import { motion } from "framer-motion";
import { heroTextVariants, staggerContainer } from "@/lib/framer-variants";
import { CTAButton } from "./CTAButton";

export default function HomeHero() {
  return (
    <motion.section
      className="py-32 text-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-5xl font-black tracking-tight"
        variants={heroTextVariants}
      >
        Generative AI Gets the Hype — You Get the Cape.
      </motion.h1>

      <motion.p
        role="alert"
        className="mx-auto mt-6 max-w-xl rounded-md bg-accent-light/20 px-6 py-4 text-lg font-bold text-accent"
        variants={heroTextVariants}
      >
        Se la tua azienda fosse nata oggi sarebbe <strong>AI-First</strong>.
        <br />
        Sei pronto al <em>Regenerative Reboot</em>?
      </motion.p>

      <motion.p
        className="mt-8 text-xl text-gray-300"
        variants={heroTextVariants}
      >
        Supersapiens integra la Generative AI nei tuoi workflow: più velocità,
        più wow, più umani al comando.
      </motion.p>

      <motion.div className="mt-10" variants={heroTextVariants}>
        <CTAButton>Book a Vibe-Call</CTAButton>
      </motion.div>
    </motion.section>
  );
} 