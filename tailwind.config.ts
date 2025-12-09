import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        signal: "#ff4d00",
        neutral: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#cfcfcf",
          400: "#9f9f9f",
          500: "#6f6f6f",
          600: "#545454",
          700: "#3a3a3a",
          800: "#1f1f1f",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta-sans)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        widest: ".3em",
      },
      maxWidth: {
        shell: "80rem",
      },
      boxShadow: {
        card: "6px 6px 0px rgba(0,0,0,0.05)",
        "card-signal": "6px 6px 0px #ff4d00",
      },
    },
  },
  plugins: [],
};

export default config;
