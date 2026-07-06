import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#16082E",
          deep: "#0D0420",
          black: "#080213",
        },
        lavender: {
          DEFAULT: "#B8A9D9",
          dim: "#8E80B0",
        },
        // Purple-only accent scale (no pink / indigo / blue / cyan).
        // Legacy keys (magenta/blue/cyan) retained as purple shades so
        // existing class names keep compiling but render on-palette.
        iris: {
          purple: "#7C3AED",
          violet: "#9D5CFF",
          magenta: "#A855F7",
          blue: "#6D28D9",
          cyan: "#C4B5FD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "iris-drift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "sheen": {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        "float-bob": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "iris-drift": "iris-drift 12s ease-in-out infinite",
        "iris-drift-slow": "iris-drift 22s ease-in-out infinite",
        "float-bob": "float-bob 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
