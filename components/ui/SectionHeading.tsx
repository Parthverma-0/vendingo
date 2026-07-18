"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
};

// Editorial section header: small uppercase mono eyebrow above a large
// bold display headline.
export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  align = "center",
  dark = false,
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className={`eyebrow mb-5 flex items-center gap-3 ${
            dark ? "!text-violet-bright" : ""
          }`}
        >
          <span className="inline-block h-px w-8 bg-violet" />
          {eyebrow}
          {align === "center" && (
            <span className="inline-block h-px w-8 bg-violet" />
          )}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className={`display max-w-4xl text-4xl sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
