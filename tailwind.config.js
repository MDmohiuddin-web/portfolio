/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily:{
      //    "Playwrite":["Playwrite IS","cursive"],
         
      //    "roboto-mono":['Roboto Mono','monospace'],
        
         
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "forest"],
  }
}

