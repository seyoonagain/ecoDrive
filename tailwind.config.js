/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Bruno: 'Bruno Ace SC',
      Urbanist: 'Urbanist',
    }
    ,
    extend: {
      backgroundImage: {
        banner: "url('../public/images/banner.jpg')",
      }
    },
  },
  plugins: [],
}

