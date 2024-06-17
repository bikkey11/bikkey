import React from "react";
import { motion } from 'framer-motion';
import { slideIn } from "../Utils/motion";


const Contact = () => {
  return (
    <motion.div 
     variants={slideIn("left","tween",0.2,1)}
    className="flex justify-center">
      <div className="text-white  bg-card max-w-[680px] p-10 pt-0 rounded-xl">
        <div className="flex flex-col items-center gap-2">
          <motion.h1 whileHover={{scale:0.9}} className="font-poppins font-black text-[38px] leading-[38px] xs:text-[60px] xs:leading-[60px]">
            Get In Touch
          </motion.h1>
          <p className="font-semibold xs:text-[16px] text-sm font-Chakra_Petch text-navText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            unde sunt odio voluptas quaerat. Ex cum facere sed alias maxime.
          </p>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="" className="font-poppins text-lg">
            Email
          </label>
          <input
            type="text"
            className="text-black font-poppins border-none px-6 py-4 rounded-2xl outline-none placeholder:font-Chakra_Petch placeholder:text-navText"
            placeholder="Please enter you email"
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="" className="font-poppins text-lg">
            Mobile
          </label>
          <input
            type="text"
            className="text-black font-poppins border-none px-6 py-4 rounded-2xl outline-none placeholder:font-Chakra_Petch placeholder:text-navText"
            placeholder="Please enter you mobile number"
          />
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="" className="font-poppins text-lg">

            Message
          </label>
          <textarea

            type="text"
            className="text-black font-poppins border-none px-6 py-4 rounded-2xl outline-none placeholder:font-Chakra_Petch placeholder:text-navText "
            rows={7}
            placeholder="Please enter you message"
          />
        </div>
        <div className="mt-4  text-lg p-3 text-center shadow-red-500 shadow-md text-white bg-homebutton max-w-xs rounded-sm">
          <span>Submit</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
