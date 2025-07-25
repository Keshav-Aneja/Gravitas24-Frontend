import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#d94c0f",
        primaryLight: "#FFBB9E",
        base: "#FAFCFF",
        outline: "#C2C2C2",
        secondary: "#0C5EFF",
      },
      fontFamily: {
        auxMono: ["Aux Mono", "monospace"],
        aldrich: ["Aldrich", "sans-serif"],
        ibmPlex: ["IBM Plex Mono", "monospace"],
        clash: ["Clash Grotesk Regular", "sans-serif"],
        clashBold: ["Clash Grotesk Medium", "sans-serif"],
        clashVar: ["Clash Grotesk Variable", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
