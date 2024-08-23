import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        primary: "#FF550C",
        primaryLight: "#FFBB9E",
        base: "#FAFCFF",
      },
      fontFamily: {
        auxMono: ["Aux Mono", "monospace"],
        aldrich: ["Aldrich", "sans-serif"],
        clash: ["Clash Grotesk Regular", "sans-serif"],
        clashBold: ["Clash Grotesk Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
