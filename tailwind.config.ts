import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020817",
        foreground: "#e5e7eb"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
