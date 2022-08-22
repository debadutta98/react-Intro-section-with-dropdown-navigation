/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Epilogue: ["Epilogue"]
      },
      backgroundColor:{
        "Almost-White":"hsl(0, 0%, 98%)",
        "Medium-Gray":"hsl(0, 0%, 41%)",
        "Almost-Black":"hsl(0, 0%, 8%)"
      },
      colors:{
        "Almost-White": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)"
      },
      content:{
        downarrow:"url(/src/images/icon-arrow-down.svg)",
        uparrow:"url(/src/images/icon-arrow-up.svg)",
        herodesktop:"url(/src/images/image-hero-desktop.png)"
      },
      screens:{
        "sm-l":{"max":"718px"},
        "sm-x":{"max":"718px","min":"350px"},
        "sm-lmin":"718px"
      },
    },
  },
  plugins: [],
}
