import React, { useState } from "react";
//icon
import {
  GiFactory,
  GiSheep,
  GiGoat,
  GiEggClutch,
  GiCorn,
} from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";

const LocationTabs = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-2xl p-5 rounded-lg w-full mx-5">
        {/* tabs */}

        <div className="flex bg-green-800/50 rounded-md p-2 items-center justify-center text-xs lg:text-base text-center text-white">
          <div
            className={
              toggle === 1
                ? "bg-white/75 rounded-md text-orange-500 transition-all duration-300 cursor-pointer lg:px-10 px-3 w-full"
                : "cursor-pointer lg:px-10 px-3 w-full"
            }
            onClick={() => toggleTab(1)}
          >
            ASHIPA
          </div>
          <div
            className={
              toggle === 2
                ? "bg-white/75 rounded-md text-orange-500 transition-all duration-300 cursor-pointer lg:px-10 px-3 w-full"
                : "cursor-pointer lg:px-10 px-3 w-full"
            }
            onClick={() => toggleTab(2)}
          >
            BERGER
          </div>
          <div
            className={
              toggle === 3
                ? "bg-white/75 rounded-md text-orange-500 transition-all duration-300 cursor-pointer lg:px-10 px-3 w-full"
                : "cursor-pointer lg:px-10 px-3 w-full"
            }
            onClick={() => toggleTab(3)}
          >
            IKORODU
          </div>
        </div>

        {/* tabs content */}
        <div className="px-3 py-5">
          {/* ashipa */}
          <div
            className={
              toggle === 1 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-x-6 text-center flex lg:text-base text-xs">
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiCorn className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiFactory className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
            </div>
          </div>
          {/* berger */}
          <div
            className={
              toggle === 2 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-x-6 text-center flex lg:text-base text-xs">
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiSheep className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiGoat className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiEggClutch className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
            </div>
          </div>

          {/* ikorodu */}
          <div
            className={
              toggle === 3 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-x-6 text-center flex lg:text-base text-xs">
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <IoFishSharp className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
              <div className="rounded-full bg-green-800/75 lg:h-14 lg:w-14 md:h-12 md:w-12 h-12 w-12 flex items-center justify-center">
                <GiFactory className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-8 w-8 text-center text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTabs;
