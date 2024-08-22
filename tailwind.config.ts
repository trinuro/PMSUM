import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        yellow: {
          'dark' : '#FFCA11',
        },
        red : {
          'dark' : '#CE1126'
        },
      },
      fontFamily: {
        hightide: ['var(--font-hightide)'],
        leagueSpartan: ['var(--font-league)'],
        horta: ['var(--font-horta)'],
      },
    },
  },
  plugins: [],
};
export default config;
