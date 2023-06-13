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
    },
    letterSpacing: {
      wide: "0.5em"
    }
  },
  plugins: [
  ],
}

