import React from "react";
import { Link } from "react-router-dom";

//motion
import { motion } from "framer-motion";

//icons
import { VscChromeClose } from "react-icons/vsc";
import { FaLeaf } from "react-icons/fa";

const MobileNav = ({ showMenu, active }) => {
  return (
    <>
      <ul
        className={
          active
            ? "md:hidden flex-col flex items-center fixed inset-0 z-20 justify-center gap-3 bg-green-900/40 backdrop-blur-lg text-white text-xl"
            : "hidden"
        }
      >
        <VscChromeClose onClick={showMenu} className="cursor-pointer h-6 w-6" />
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/product">Product</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/careers">Careers</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/sustainability">Sustainability</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/contact">Contact Us</Link>
        </motion.li>
        <div className="pt-10">
          <FaLeaf className="h-8 w-8 text-lime-100/50" />
        </div>
      </ul>
    </>
  );
};

export default MobileNav;
