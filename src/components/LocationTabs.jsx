import React, { useState } from "react";
//icon
import {
  GiWheat,
  GiFishCooked,
  GiManualMeatGrinder,
  GiPlantWatering,
  GiSheep,
  GiGoat,
  GiEggClutch,
  GiDoubleFish,
  GiFishEggs,
  GiWaterBottle,
} from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

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
            <div className=" py-3 space-x-3 text-center flex lg:text-base text-xs">
              <div>
                <GiPlantWatering className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiManualMeatGrinder className="h-8 w-8 text-center text-green-600" />
              </div>
            </div>
          </div>
          {/* berger */}
          <div
            className={
              toggle === 2 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-x-3 text-center flex lg:text-base text-xs">
              <div>
                <GiSheep className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiGoat className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiEggClutch className="h-8 w-8 text-center text-green-600" />
              </div>
            </div>
          </div>

          {/* ikorodu */}
          <div
            className={
              toggle === 3 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-x-3 text-center flex lg:text-base text-xs">
              <div>
                <GiFishEggs className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiDoubleFish className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiFishCooked className="h-8 w-8 text-center text-green-600" />
              </div>
              <span className="flex items-center justify-center">
                <IoCloseOutline className="h-4 w-4 text-center text-orange-500" />
              </span>
              <div>
                <GiWaterBottle className="h-8 w-8 text-center text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTabs;
