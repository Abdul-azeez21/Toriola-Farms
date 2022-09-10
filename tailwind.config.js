/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": 'url("./assets/images/HOME.jpg")',
        "hero-location": 'url("./assets/images/LOCATION.jpg")',
        "home-egg-image": 'url("./assets/images/EGG.jpg")',
        "home-catfish-image": 'url("./assets/images/CATFISH1.jpg")',
        "home-water-image": 'url("./assets/images/WATER.jpg")',
        "home-cow-image": 'url("./assets/images/COW1.jpg")',
        "home-maize-image": 'url("./assets/images/MAIZE.jpg")',
      },
    },
  },
  plugins: [],
};
