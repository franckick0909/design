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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'inter': ['var(--font-inter)'],
        'berkshire-swash': ['var(--font-berkshire-swash)'],
        'pinyon-script': ['var(--font-pinyon-script)'],
        'metal': ['var(--font-metal)'],
        'felipa': ['var(--font-felipa)'],
        'luxurious-roman': ['var(--font-luxurious-roman)'],
        'srisakdi': ['var(--font-srisakdi)'],
      },

    },
  },
  plugins: [],
};
export default config;
