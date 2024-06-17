import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex lg:justify-center">
      {/* medium screen and above */}
      <div className="bg-navbarCol sm:flex hidden lg:w-5/6 w-full rounded-sm p-3 py-4  justify-evenly text-navText font-Chakra_Petch shadow-slate-900 shadow-md">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testinomial</a>
        <a href="#">Recents work</a>
        <a href="#">Get In Touch</a>
        <div className="flex justify-center items-center gap-2">
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
      {/* for small screen only */}
      <div className="bg-navbarCol sm:hidden pr-8 pl-4  lg:w-5/6 w-full rounded-sm p-3 py-4 flex justify-between text-navText font-Chakra_Petch shadow-slate-900 shadow-md">
        <div>
          {toggle ? <AiOutlineClose className="cursor-pointer" onClick={() => { setToggle(!toggle) }} />
            : <CiMenuBurger className="cursor-pointer" onClick={() => { setToggle(!toggle) }} />}
          <ul className={` ${!toggle?'hidden':'flex flex-col mt-2'}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Testinomial</a>
            <a href="#">Recents work</a>
            <a href="#">Get In Touch</a>
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
