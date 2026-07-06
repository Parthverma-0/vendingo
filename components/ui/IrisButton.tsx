"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "iris" | "ghost";
  className?: string;
  pulse?: boolean;
};

export default function IrisButton({
  children,
  href = "#",
  variant = "iris",
  className = "",
  pulse = false,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform";

  if (variant === "ghost") {
    return (
      <motion.a
        href={href}
        className={`${base} iris-border bg-white/[0.03] text-white/90 hover:text-white ${className}`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      className={`${base} text-white shadow-[0_8px_40px_-8px_rgba(157,92,255,0.6)] ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="absolute inset-0 rounded-full iris-gradient animate-iris-drift" />
      {pulse && (
        <motion.span
          className="absolute inset-0 rounded-full iris-gradient"
          animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
