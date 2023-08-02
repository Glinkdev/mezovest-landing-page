/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
  theme: {
    fontFamily: {
      liquefier: ["Liquefier"],
      poppins: ["Poppins"]
    },
    extend: {
      colors: {
        darkGreen: "#203035",
        green: "#02CB63"
      },
      screens: {
        "2xl": '2220px',
      },
      backgroundImage:{
        'heroImage': 'url(./src/assets/icons/mez-hero-img.svg)',
        'joinImage': 'url(../src/assets/images/join-background-imagee.png)',
      }
    },
    letterSpacing: {
      wide: "0.5em"
    },
    
  },
  plugins: [
  ],
}

