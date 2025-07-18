import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        secondary: 'var(--secondary)',
        panel: 'var(--panel)',
        uBlack: 'var(--uBlack)',
        uGray: 'var(--uGray)',
        uGrayLight: 'var(--uGrayLight)',
        uGrayLightLight: 'var(--uGrayLightLight)',
        uRed: 'var(--uRed)',
        uGreen: 'var(--uGreen)',
        uBlue: 'var(--uBlue)',
        score: {
          1: 'var(--score-1)',
          2: 'var(--score-2)',
          3: 'var(--score-3)',
          4: 'var(--score-4)',
          5: 'var(--score-5)',
          6: 'var(--score-6)',
          7: 'var(--score-7)',
          8: 'var(--score-8)',
          9: 'var(--score-9)',
          10: 'var(--score-10)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;