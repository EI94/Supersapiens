"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function CTAButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  size = "lg",
}: CTAButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    {
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl":
        variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border":
        variant === "secondary",
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  const MotionComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionComponent>
  );
} 