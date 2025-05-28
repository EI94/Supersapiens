"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer-variants";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-accent/50"
    >
      <div className="text-center">
        <div className="mb-4">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl group-hover:bg-accent/20 transition-colors">
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
} 