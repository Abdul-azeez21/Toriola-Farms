import React from "react";
//components
import { Navbar } from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div>
      <Navbar />
      {/* ... */}
      <div className="w-full bg-cover bg-hero-image3 bg-center bg-gray-600 h-[20rem]">
        <div className="flex items-center justify-center w-full h-full lg:px-12 px-8 bg-green-900/25">
          <div className="">
            <h1 className="lg:text-8xl md:text-6xl font-light text-5xl text-white">
              Careers
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center xl:mx-52 lg:mx-52 md:mx-48 mx-10 my-16">
        <div>
          <span className="lg:text-xl md:text-xl text-base text-start font-thin py-2">
            <AnimatedText text="We have a fantastic and effective work force. If you think you'd fit right in, take a look at our current vacancies or send us your CV and a cover letter telling us just why Toriola farms needs you!" />
          </span>
          <div className="py-6">
            <span className="lg:text-xl md:text-xl text-base text-start font-thin py-3">
              <AnimatedText text="To apply for any of the roles below simply email your CV and cover letter to" />
            </span>
            <p className="lg:text-xl md:text-xl text-base text-start font-normal py-3">
              info@toriolafarms.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
