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
        //about
        "hero-image1": 'url("./assets/images/ABOUT.jpg")',
        //product
        "hero-image2": 'url("./assets/images/PRODUCT.jpg")',
        "product-poultry-image": 'url("./assets/images/poultry.jpg")',
        "product-catfish-image": 'url("./assets/images/CATFISH.jpg")',
        "product-cow-image": 'url("./assets/images/COW2.jpg")',
        "product-chicken-image": 'url("./assets/images/RAW CHICKEN.jpg")',
        //careers
        "hero-image3": 'url("./assets/images/CAREER.jpg")',
        //sustainability
        "hero-image4": 'url("./assets/images/SUSTAIN.jpg")',
      },
    },
  },
  plugins: [],
};
