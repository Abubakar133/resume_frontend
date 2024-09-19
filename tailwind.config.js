/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-5": "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.1)",
          "200": "rgba(0, 0, 0, 0.05)",
        },
        "text-color": "#696969",
        "color-2": "#000",
        "border-color": "#e6e9ec",
        "bg-1": "#f6f8f9",
        "color-1": "#0061df",
        dodgerblue: "#2687ff",
        "color-3": "#cc5040",
        coral: "#ff783d",
        chocolate: "#cc450a",
      },
      spacing: {},
      fontFamily: {
        bold1: "'DM Sans'",
        "courier-prime": "'Courier Prime'",
      },
      borderRadius: {
        "10xs": "3px",
        "41xl": "60px",
      },
    },
    fontSize: {
      sm: "14px",
      "6xl": "45px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      "3xs": "10px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      smi: "13px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
     
      'lg': { 'min': '1300px' },  
      'md': { 'min': '768px' },  
      'sm': { 'min': '640px' },  
      'mq825': { 'max': '825px' },
      'mq450': { 'max': '450px' },
     
      'mq1450': { 'max': '1450px' },
    }
  },
  corePlugins: {
    preflight: false,
  },
};
