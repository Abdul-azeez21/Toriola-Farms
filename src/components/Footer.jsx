import React from "react";
import Logo from "../assets/images/NEW LOGO.png";
//icons
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="">
      <footer className="border-t border-green-600/25">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-20 gap-y-8 lg:mx-10 md:mx-10 mx-5 p-7">
          <div className="flex justify-center items-center">
            <div className="">
              <a href="/">
                <img
                  src={Logo}
                  alt="TORIOLA FARMS"
                  className="lg:w-32 md:w-32 xl:w-32 w-28 lg:h-20 md:h-20 xl:h-20 h-16 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-col">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="lg:text-lg md:text-base text-base font-normal text-green-600 decoration-none"
                >
                  About
                </a>
              </div>
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="lg:text-lg md:text-base text-base font-normal text-green-600 decoration-none"
                >
                  Product
                </a>
              </div>
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="lg:text-lg md:text-base text-base font-normal text-green-600 decoration-none"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-col">
              <div className="flex-1">
                <span className="text-green-600">info@toriolafarms.com</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-center py-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100067911163393"
                    className="mx-3"
                  >
                    <FiFacebook className="text-white h-5 w-5" />
                  </a>
                  <a
                    href="https://mobile.twitter.com/ToriolaFarms"
                    className="mx-3"
                  >
                    <FiTwitter className="text-white h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/toriola-farms"
                    className="mx-3"
                  >
                    <FiLinkedin className="text-white h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex justify-center items-center py-2">
          <span className="text-center xl:text-base lg:text-base md:text-sm text-xs text-gray-500">
            Copyright TORIOLA FARMS © 2021. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
