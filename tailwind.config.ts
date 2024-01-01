import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Mako: ["Mako", "sans-serif"],
      },
    },
    colors: {
      "primary-back": "#182C25",
      "secondary-back": "#1E453E",
      "light-secondary": "#8EA299",
      "accent-back": "#455B55",
      "primary-light": "#FFFFF4",
      "neutral-offset": "#534646",
      "light-offset": "#A9A29D",
      "accent-overlay": "#306844",
    },
  },
  plugins: [],
};
export default config;
