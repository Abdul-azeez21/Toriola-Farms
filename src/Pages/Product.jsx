import React from "react";
//components
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ProductCard.css";
//motion
import { motion } from "framer-motion";

const Product = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="w-full bg-cover bg-hero-image2 bg-center bg-gray-600 h-[20rem]">
        <div className="flex items-center justify-center w-full h-full lg:px-12 px-8 bg-green-900/25">
          <div className="">
            <h1 className="lg:text-8xl md:text-6xl font-light text-5xl text-white">
              Products
            </h1>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-x-20 gap-y-10 lg:mx-10 md:mx-10 mx-5">
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-home-maize-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Crop production
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    We own a diverse portfolio of crops spanning across food
                    crops, cash crops and popular vegetables.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-product-poultry-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Poultry production
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    With expertise in both layers and broilers breeding, we
                    produce fresh eggs and chicken meat for our costumers.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-product-catfish-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Aquaculture production
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    We explore the whole aquaculture value chain by producing
                    fingerlings, table sized fishes and tasty smoked fishes.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-product-cow-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Ranching
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    Our four-legged stock include Cows, Rams and Goats.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-product-chicken-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Food processing
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    We add value to our products by processing them into
                    consumables for wholesale and retail markets and also
                    households.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="rounded-lg shadow-lg">
            <div className="thecard">
              <div className="thefront text-white  flex items-center justify-center h-full w-full rounded-lg bg-cover bg-center bg-home-water-image">
                <div className=" flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <h1 className="font-normal lg:text-2xl text-xl text-center">
                    Bottled Water
                  </h1>
                </div>
              </div>
              <div className="theback text-white lg:p-12 p-10 flex items-center justify-center h-full w-full rounded-lg bg-green-600">
                <div>
                  <div className="font-normal lg:text-base text-sm text-center">
                    In a closely monitored envionment, we package clean drinking
                    water in sachets and bottles, after undergoing adequate
                    sanitary protocols.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
