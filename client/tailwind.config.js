/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'colorapp':'#1976D2'
      },
      screens: {
        'xs':'300px', // dispositivos mobiles más pequeño
        'sm': '600px', //tablet
        'md': '768px', //dispositivos medianos
        'lg': '1024px', //laptop
        'xl': '1280px' //desktop
      }
    },
  },
  plugins: [],
}

