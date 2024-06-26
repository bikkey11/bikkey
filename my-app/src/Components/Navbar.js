import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex lg:justify-center">
      {/* medium screen and above */}
      <div className="bg-navbarCol sm:flex hidden lg:w-5/6 w-full rounded-sm p-3 py-4  justify-evenly text-navText font-Chakra_Petch shadow-slate-900 shadow-md">
        <Link to="/" className="opacity-0 animate-[navlist_1s_ease-in-out_forwards]">Home</Link>
        <Link to="#about" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_200ms_forwards]">About</Link>
        <Link to="#testinomial" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_400ms_forwards] ">Testinomial</Link>
        <Link to="#recentsWorks" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_600ms_forwards]">Recents work</Link>
        <Link to="#getInTouch" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_800ms_forwards]">Get In Touch</Link>
        <div className="flex justify-center items-center gap-2">
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#">
            <FaTwitter />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#">
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
      {/* for small screen only */}
      <div className="bg-navbarCol sm:hidden pr-8 pl-4  lg:w-5/6 w-full rounded-sm p-3 py-4 flex justify-between text-navText font-Chakra_Petch shadow-slate-900 shadow-md">
        <div>
          {toggle ? <AiOutlineClose className="cursor-pointer" onClick={() => { setToggle(!toggle) }} />
            : <CiMenuBurger className="cursor-pointer" onClick={() => { setToggle(!toggle) }} />}
          <ul className={` ${!toggle ? 'hidden' : 'flex flex-col mt-2'}`}>
            <Link onClick={() => { setToggle(!toggle) }} to="/" className="opacity-0 animate-[navlist_1s_ease-in-out_forwards]">Home</Link>
            <Link onClick={() => { setToggle(!toggle) }} to="#about" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_200ms_forwards]">About</Link>
            <Link onClick={() => { setToggle(!toggle) }} to="#testinomial" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_400ms_forwards] ">Testinomial</Link>
            <Link onClick={() => { setToggle(!toggle) }} to="#recentsWorks" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_600ms_forwards]">Recents work</Link>
            <Link onClick={() => { setToggle(!toggle) }} to="#getInTouch" smooth className="opacity-0 animate-[navlist_1s_ease-in-out_800ms_forwards]">Get In Touch</Link>
          </ul>

        </div>
        <div className="flex justify-center  gap-2">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
