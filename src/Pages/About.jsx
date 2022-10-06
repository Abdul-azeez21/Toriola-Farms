import React from "react";
//components
import { Navbar } from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";
import About1 from "../assets/images/farmer.jpg";
import About2 from "../assets/images/About2.jpg";
import About3 from "../assets/images/About3.jpg";
//icons
import { GiCorn } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
//motion
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="w-full bg-cover bg-hero-image1 bg-center bg-gray-600 h-[20rem]">
        <div className="flex items-center justify-center w-full h-full lg:px-12 px-8 bg-green-900/25">
          <div className="">
            <h1 className="lg:text-8xl md:text-6xl font-light text-5xl text-white">
              About us
            </h1>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-20 lg:mx-10 md:mx-10 mx-5">
          <div className="flex items-center justify-center px-5">
            <div>
              <h1 className="text-2xl font-medium text-start border-b border-green-600 py-2">
                About the idea
              </h1>
              <p className="text-lg text-start font-thin">
                <AnimatedText
                  text=" Toriola farms prides itself in providing a range of products,
                grown and manufatured under conditions supervised by
                professionals. With emphasis on safety and quality, we adopt
                accessible sustainable systems and carry out continuous research
                and development to ensure constant improvements across the food
                value chain."
                />
              </p>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={About1}
              alt="an illustration of a farmer"
              className="scale-75"
            />
          </motion.div>
        </div>
      </div>
      {/* ... */}

      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-20 lg:mx-10 md:mx-10 mx-5">
          <div className="flex items-center justify-center px-5">
            <div>
              <h1 className="lg:text-6xl md:text-4xl text-3xl font-light text-start py-2">
                Our Mission
              </h1>
              <p className="text-lg text-start font-thin">
                <AnimatedText
                  text="To foster food security by aligning and optimizing the food
                value chain processes to provide quality products at reasonable
                prices."
                />
              </p>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={About2}
              alt="an illustration of toriola farm"
              className="scale-75"
            />
          </motion.div>
        </div>
      </div>
      {/* ... */}

      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-20 lg:mx-10 md:mx-10 mx-5">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={About3}
              alt="an illustration of toriola farm"
              className="scale-75"
            />
          </motion.div>
          <div className="flex items-center justify-center px-5">
            <div>
              <h1 className="lg:text-6xl md:text-4xl text-3xl font-light text-start py-2">
                Our Vision
              </h1>
              <p className="text-lg text-start font-thin">
                <AnimatedText
                  text="  To be a leader in the African agribusiness space, while creating
                employment by engaging local labour force from cultivation to
                processing of agricultural products."
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ... */}
      <div className="flex items-center justify-center mt-10 bg-green-600 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-x-16 gap-y-10 lg:mx-10 md:mx-10 mx-5">
          <motion.div
            className="flex items-center justify-center bg-white rounded-md p-5"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className="flex justify-center py-2 text-green-600">
                <GiCorn className="lg:h-8 lg:w-8 md:h-8 md:w-8 h-6 w-6" />
              </h1>
              <span className="lg:text-lg md:text-lg text-base font-medium text-center">
                Over 15 produce/products in our range.
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center bg-white  rounded-md p-5"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className="flex justify-center py-2 text-green-600">
                <RiBuilding2Fill className="lg:h-8 lg:w-8 md:h-8 md:w-8 h-6 w-6" />
              </h1>
              <span className="lg:text-lg md:text-lg text-base font-medium text-center">
                Established in 2014.
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center bg-white rounded-md p-5"
            initial={{ opacity: 0, translateY: 3 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className="flex justify-center py-2 text-green-600">
                <MdLocationPin className="lg:h-8 lg:w-8 md:h-8 md:w-8 h-6 w-6" />
              </h1>
              <span className="lg:text-lg md:text-lg text-base font-medium text-center">
                3 Branches across the country.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
