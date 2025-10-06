/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
 extend: {
      colors: {
        orange: "#ED7901",
        yellow: "#FCB81F",
        textColor:"#16205F",
        borderColor:"#C5E0FF",
        bgYellow:"#FFF856",
        bgGrayColor:"#FBFBFB",
        buttonBg:"#F3F3F3",
      },
      fontWeight:{
        'extraBold': '800',
        'semiBold': '600',
        'medium': '500',
        'regular': '400',
      },
      fontSize: {
       'font_46':"46px",
       'font_16':"16px",
       'font_18':"18px",
       'font_64':"64px",
       'font_28':"28px",
       'font_24':'24px',
       'font_96':"96px",

      }
    },
    },
  plugins: [],
}

