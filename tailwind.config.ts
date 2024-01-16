import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Mako: ["Mako", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out 0.5s",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        fadeInDelayed: "fadeIn 0.5s ease-out 1s",
        fadeDown: "fadeDown 0.5s ease-out",
        fadeDownDelayed: "fadeDown 1s ease-out 2s",
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
      "github-green": "#85BC63",
    },
    boxShadow: {
      bottom:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      upward:
        "0px -4px 4px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  },
  plugins: [],
};
export default config;
