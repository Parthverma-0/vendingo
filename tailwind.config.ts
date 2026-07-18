import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial light palette — white paper, near-black ink, purple accent.
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#3D3D46",
          muted: "#6E6E78",
          faint: "#9B9BA4",
        },
        violet: {
          DEFAULT: "#7C3AED",
          deep: "#5B21B6",
          bright: "#8B5CF6",
        },
        // Soft lavender tints for section variety.
        tint: {
          50: "#FAF8FF",
          100: "#F3EFFC",
          200: "#E9E2F8",
          300: "#DDD2F3",
        },
        // Cinematic dark sections — deep near-black purple.
        night: {
          DEFAULT: "#0C0714",
          soft: "#160D24",
          line: "rgba(255,255,255,0.10)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "float-bob": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "float-bob": "float-bob 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
