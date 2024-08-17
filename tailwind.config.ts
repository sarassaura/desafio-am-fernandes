import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // White
        secondary: "#5d92dd", // Cornflower Blue
        accent: "#00355E", // Berkeley Blue
        accent2: "#ffcb29", // Sunglow
        neutral: "#e7e3c6", // Parchment
      },
    },
  },
  plugins: [],
};
export default config;
