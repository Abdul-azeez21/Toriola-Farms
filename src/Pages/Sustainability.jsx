import React from "react";
//components
import { Navbar } from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";
import Sustain1 from "../assets/images/IMG_4001.jpg";
import Sustain2 from "../assets/images/IMG_4002.jpg";
import Sustain3 from "../assets/images/IMG_4003.jpg";
//icon
import { FaHandHoldingHeart } from "react-icons/fa";
//motion
import { motion } from "framer-motion";

const Sustainability = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="w-full bg-cover bg-hero-image4 bg-center bg-gray-600 h-[20rem]">
        <div className="flex items-center justify-center w-full h-full lg:px-12 px-8 bg-green-900/25">
          <div className="">
            <h1 className="lg:text-8xl md:text-6xl font-light text-5xl text-white">
              Sustainability
            </h1>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center xl:mx-52 lg:mx-56 md:mx-48 mx-10 my-12">
        <div>
          <div className="flex justify-center items-center my-5">
            <div className="flex justify-center items-center rounded-full bg-green-600/25 lg:h-32 lg:w-32 md:h-32 md:w-32 h-24 w-24">
              <div className="bg-green-600/50 rounded-full lg:h-24 lg:w-24 md:h-24 md:w-24 h-16 w-16 flex justify-center items-center">
                <FaHandHoldingHeart className="text-green-700 lg:h-12 lg:w-12 md:h-12 md:w-12 h-8 w-8 animate-pulse" />
              </div>
            </div>
          </div>
          <span className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
            <AnimatedText text="Toriola farms was built on values which incorporates social responsibility and environmental awareness in the totality of our operations. To contribute our quota to the global sustainability efforts, we adopted 3 of 17 United Nations Sustainability Development Goals (SDGs) into our long-term strategies and day-to-day operations." />
          </span>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center xl:mx-52 lg:mx-52 md:mx-48 mx-10 my-10">
        <div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={Sustain1}
              alt="SDG 2 - ZERO HUNGER"
              className="xl:h-48 xl:w-48 lg:h-48 lg:w-48 md:h-44 md:w-44 h-36 w-36"
            />
          </motion.div>
          <hr className="my-3"></hr>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-medium py-1">
                End hunger, achieve food security, improve nutrition and promote
                sustainable agriculture.
              </h1>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
                On a mission to improve the food security in Nigeria and Africa
                as a whole, our portfolio spans across different forms of
                agriculture and food production with focus on closing the
                deficit gap present across all tiers of the country's food
                production. Aligning our objectives with this goal, our
                streamlined value chain systems aims to reduce food wastage
                across supply chains.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center xl:mx-52 lg:mx-52 md:mx-48 mx-10 my-10">
        <div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={Sustain2}
              alt="SDG 8 - DECENT WORK AND ECONOMIC GROWTH"
              className="xl:h-48 xl:w-48 lg:h-48 lg:w-48 md:h-44 md:w-44 h-36 w-36"
            />
          </motion.div>
          <hr className="my-3"></hr>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-medium py-1">
                Promote sustained, inclusive and sustainable economic growth,
                full and productive employment and decent work for all.
              </h1>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
                With a workforce of almost 50 part-time and full-time workers,
                we contribute to the economic growth and join the global race to
                reduce the rate of youth unemployment. Our current expansion is
                projected to create additional executive, administrative and
                on-site jobs, continuously providing decent work opportunities
                and strengthening existing linkages in poverty eradication.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
      <div className="flex items-center justify-center xl:mx-52 lg:mx-52 md:mx-48 mx-10 my-10">
        <div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={Sustain3}
              alt="SDG 12 - RESPONSIBLE CONSUMPTION AND PRODUCTION"
              className="xl:h-48 xl:w-48 lg:h-48 lg:w-48 md:h-44 md:w-44 h-36 w-36"
            />
          </motion.div>
          <hr className="my-3"></hr>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-medium py-1">
                Sustainable consumption and production.
              </h1>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
                In our growth, cultivation and production processes, we ensure
                minimal use of chemical fertilizers and herbicides and opt for
                more organic methods. The recent adaptation of solar generated
                power systems in our farmhouses, pen houses and processing
                facilities reiterate our commitment to sustainable production.
              </h1>
              <h1 className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
                One of the effective ways of attaining sustainable and
                responsible production is by reducing food waste along stages of
                the food supply chain. Toriola Farms implements a vertical
                supply chain with immediate value addition, to reduce food waste
                and ensure quality and freshness of products that gets to the
                final consumer.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
