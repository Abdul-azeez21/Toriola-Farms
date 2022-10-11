import React from "react";
//components
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
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
          <motion.div className="bg-cover bg-center bg-home-maize-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Crop production
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-cover bg-center bg-product-poultry-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Poultry production
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-cover bg-center bg-product-catfish-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Aquaculture production
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-cover bg-center bg-product-cow-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Ranching
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-cover bg-center bg-product-chicken-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Food processing
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-cover bg-center bg-home-water-image rounded-lg shadow-lg">
            <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
              <div>
                <h1 className="font-normal lg:text-2xl text-xl text-center">
                  Bottled water
                </h1>
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
