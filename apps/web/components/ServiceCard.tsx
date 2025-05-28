"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer-variants";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-border bg-card hover:border-accent/50 group relative rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="text-center">
        <div className="mb-4">
          <span className="bg-accent/10 group-hover:bg-accent/20 inline-flex h-16 w-16 items-center justify-center rounded-full text-3xl transition-colors">
            {icon}
          </span>
        </div>
        <h3 className="text-foreground group-hover:text-accent mb-3 text-xl font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Hover effect */}
      <div className="from-accent/5 pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
