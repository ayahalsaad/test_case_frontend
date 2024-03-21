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
        colorOne : '#f8f4f4',
        colorTwo : '#db536a',
        colorThree: '#ffb600',
        colorFour : '#968c6d',
        colorFive : 	'#f8f2f2',
        colorSix: '#dc6900', 
        colorSeven : '#eb8c00',
        colorEight : '#e0301e',
        colorNine : '#a32020',
        colorTen :'#602320',
      },
      fontFamily: {
        'customFont': ['Georgia', 'serif'], 
        'SecondaryFont' : ['Arial'],

      },
    },
  },
  plugins: [],
};
export default config;
