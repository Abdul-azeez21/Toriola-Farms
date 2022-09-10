import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO1.png";
import MobileNav from "./MobileNav";

//icon
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="">
      <nav className="fixed top-0 left-0 right-0 flex place-content-between mx-5 my-3 px-4 lg:px-10 py-2 items-center bg-white/95 shadow-md rounded-md">
        <div className="">
          <a href="/">
            <img
              src={Logo}
              alt="TORIOLA FARMS"
              className="lg:w-24 md:w-24 xl:w-24 w-16 lg:h-10 md:h-10 xl:h-10 h-8 object-contain"
            />
          </a>
        </div>

        <div>
          <div>
            <HiOutlineMenuAlt3
              onClick={showMenu}
              className="cursor-pointer md:hidden"
            />
          </div>
          <ul className="hidden md:flex gap-6 text-sm text-black">
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">About</Link>
            </li>
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">Product</Link>
            </li>
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">Careers</Link>
            </li>
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">Sustainability</Link>
            </li>
            <li className="hover:border-b hover:border-green-900">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <MobileNav showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
