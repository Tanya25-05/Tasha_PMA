// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
       "primary": "#00040f",
       "grey" :"#252524",
       "secondary": "#00f6ff",
       "dimWhite": "rgba(255, 255, 255, 0.7)",
       "dimBlue": "rgba(9, 151, 124, 0.1)",
       "main" : "#20dfb3",
       "pink" :"#F40076",
       "dimPink":"#F7ECF1",
       "blurpink": "#840844"

      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
    },
    screens: {
      "xxs": "320px",
      "xs": "480px",
      "ss": "620px",
      "sm": "768px",
      "md": "1060px",
      "ml":"1385",
      "lg": "1200px",
      "xl": "1700px",
    },
  },
  plugins: [],
};
