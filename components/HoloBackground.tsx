"use client";

import { motion } from "framer-motion";

// Calm deep purple-to-black canvas. Restrained — one slow purple glow,
// a soft black vignette, and a faint grid. No rainbow mesh.
export default function HoloBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas-black">
      {/* deep purple base, fading to near-black at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_50%_-15%,#1c0a3a_0%,#11052a_45%,#080213_100%)]" />

      {/* one slow purple bloom near the top */}
      <motion.div
        className="absolute left-1/2 top-[-15%] h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-iris-purple/25 blur-[120px]"
        animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* a deeper violet glow low-right, very subtle */}
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] h-[45vw] w-[45vw] rounded-full bg-iris-blue/20 blur-[130px]"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint grid + black vignette */}
      <div className="absolute inset-0 grid-texture opacity-[0.35]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_55%,rgba(5,1,12,0.75)_100%)]" />
    </div>
  );
}
