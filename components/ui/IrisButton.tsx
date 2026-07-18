"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "iris" | "ghost" | "inverse";
  className?: string;
  pulse?: boolean;
};

// Primary action button. "iris" = solid violet, "ghost" = hairline outline,
// "inverse" = white pill for dark/violet sections. Same API as before.
export default function IrisButton({
  children,
  href = "#",
  variant = "iris",
  className = "",
  pulse = false,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform";

  const spring = { type: "spring" as const, stiffness: 400, damping: 17 };

  if (variant === "ghost") {
    return (
      <motion.a
        href={href}
        className={`${base} border border-ink/15 bg-transparent text-ink hover:border-violet hover:text-violet ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={spring}
      >
        {children}
      </motion.a>
    );
  }

  if (variant === "inverse") {
    return (
      <motion.a
        href={href}
        className={`${base} bg-white text-ink shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] hover:text-violet-deep ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={spring}
      >
        {pulse && (
          <motion.span
            className="absolute inset-0 rounded-full bg-white"
            animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      className={`${base} bg-violet text-white shadow-[0_10px_36px_-10px_rgba(124,58,237,0.55)] hover:bg-violet-deep ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
    >
      {pulse && (
        <motion.span
          className="absolute inset-0 rounded-full bg-violet"
          animate={{ scale: [1, 1.35], opacity: [0.45, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
