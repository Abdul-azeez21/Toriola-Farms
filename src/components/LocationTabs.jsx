import React, { useState } from "react";

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
        <div className="px-3">
          {/* ashipa */}
          <div
            className={
              toggle === 1 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-y-1 text-center divide-y lg:text-base text-xs divide-dashed">
              <div>Cash Crops</div>
              <div>Food Crops</div>
              <div>Vegetables</div>
              <div>Food processing</div>
            </div>
          </div>
          {/* berger */}
          <div
            className={
              toggle === 2 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-y-1 text-center divide-y lg:text-base text-xs divide-dashed">
              <div>Goat</div>
              <div>Cattle</div>
              <div>Sheep</div>
              <div>Fresh Eggs</div>
            </div>
          </div>

          {/* ikorodu */}
          <div
            className={
              toggle === 3 ? "flex items-center justify-center" : "hidden"
            }
          >
            <div className=" py-3 space-y-1 text-center divide-y lg:text-base text-xs divide-dashed">
              <div>Fingerlings</div>
              <div>Catfish</div>
              <div>Bottled water</div>
              <div>Smoked Catfish</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTabs;
