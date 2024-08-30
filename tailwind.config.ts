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
        'hover-pattern': 'url(/image/team/hover_pattern_dayak_motif.png)',
        'bunga-terung': 'url(/image/team/bg_bunga_terung.png)'
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
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
export default config;
