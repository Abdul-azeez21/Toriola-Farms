import React from "react";
import { motion } from "framer-motion";

//components
import { Navbar } from "../components/Navbar";
import LocationTabs from "../components/LocationTabs";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";

//icons
import { GiEggClutch, GiWaterBottle, GiCow, GiCorn } from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const spinTransition = {
  loop: Infinity,
  duration: 15,
  ease: "linear",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="w-full bg-cover bg-hero-image bg-center bg-gray-600 h-[24rem]">
        <div className="flex items-center w-full h-full lg:px-12 px-8 bg-gradient-to-tr from-green-900 to-transparent">
          <div className="">
            <h1 className="lg:text-6xl text-3xl font-semibold text-orange-400 py-1">
              <AnimatedText text="Toriola Farms" />
            </h1>
            <h2 className="lg:text-xl text-sm font-semibold text-white py-3">
              <AnimatedText
                text=" Leveraging Africa's strength to create sustainable food at stellar
              quantity."
              />
            </h2>
            <div className="py-2">
              <a href="/contact">
                <button className="text-white bg-green-500 hover:bg-green-800 text-sm px-6 py-2 rounded-br-lg rounded-tl-lg">
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ... */}
      <section className="my-5 flex items-center justify-center">
        <div>
          <div className="py-3">
            <h1 className="lg:text-3xl text-xl text-gray-800 text-center font-medium">
              Our range of products
            </h1>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-7 mx-3">
              <motion.div
                className="bg-cover bg-center bg-home-egg-image rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <GiEggClutch />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      Fresh table size eggs
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-cover bg-center bg-home-catfish-image rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <IoFishSharp />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      Fresh table size Catfish
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-cover bg-center bg-home-water-image rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <GiWaterBottle />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      Bottled water
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-cover bg-center bg-home-cow-image rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <GiCow />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      Cattle and Sheep
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-cover bg-center bg-home-maize-image rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <GiCorn />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      Crop production
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-cover bg-center  rounded-lg shadow-lg"
                initial={{ opacity: 0, translateY: 3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className=" text-white lg:p-16 p-14 flex items-center justify-center h-full w-full rounded-lg bg-gradient-to-tr from-green-800/95">
                  <div>
                    <div className="flex items-center justify-center lg:text-4xl text-2xl">
                      <FiMoreHorizontal />
                    </div>
                    <h1 className="font-normal lg:text-2xl text-xl text-center">
                      and many more
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ... */}
      <section className="py-5 flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <motion.div className="border border-dashed border-green-600 rounded-full lg:h-40 lg:w-40 h-24 w-24 flex items-center justify-center">
              <motion.div
                className="border border-dashed border-green-600 rounded-full lg:h-20 lg:w-20 h-12 w-12 flex items-center justify-center -z-10"
                animate={{ rotate: 360 }}
                transition={spinTransition}
              >
                <motion.div className="flex items-center justify-center animate-pulse">
                  <FaLeaf className="lg:h-6 lg:w-6 h-4 w-4 text-green-800" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="lg:text-xl text-md text-orange-500 text-center font-medium my-4 mx-4">
                Our production processes are carried out in three locations
                across Nigeria
              </h1>
              <LocationTabs />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
