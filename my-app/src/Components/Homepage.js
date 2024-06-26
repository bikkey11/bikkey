import React from "react";
import Navbar from "./Navbar";
import image1 from "../Assets/Bikkey.png";

const Homepage = () => {
    return (
        <div className="h-screen z-20" id="home">
            <Navbar />
            <div className="flex justify-center items-center h-full">
                <div className="sm:mx-10 lg:mx-32 my-20 flex flex-col gap-10 max-w-[948px] h-max">
                    <div className="flex flex-wrap-reverse  font-Chakra_Petch justify-center md:flex  md:justify-between md:flex-nowrap ">
                        <div className="animate-[navImg_1s_ease_forwards] flex flex-col gap-10  mx-10 my-4 items-center md:items-start ">
                           <div className="flex flex-col items-center md:items-start ">
                           <h1 className="text-white -leading-7 text-3xl xs:text-4xl md:text-5xl">Bikash Nath Yogi</h1>
                            <p className="text-navText text-[16px] xs:text-[20px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Molestiae architecto suscipit quis, ullam aliquam neque labore,
                                adipisci nostrum sint sed velit consequatur pariatur ipsam
                                praesentium, distinctio repudiandae quos! Odit, molestias.
                            </p>
                           </div>
                            <div className="text-lg p-4 text-center shadow-red-500 shadow-md text-white bg-homebutton max-w-xs rounded-sm">
                                {"Let's get started >"}{" "}
                            </div>
                        </div>
                        <img
                            src={image1}
                            className="animate-[navImg_1s_ease_300ms_forwards] opacity-0 rounded-full  object-cover aspect-square lg:h-[350px] md:h-[300px] h-[200px]"
                            alt=""
                        />
                    </div>
                    {/* <div className="mx-10 mt-10  gap-4 hidden md:block">
                        <h1 className="text-navText text-xl font-Chakra_Petch  font-semibold ">
                            Worked With
                        </h1>
                        <div className="flex justify-between mt-4 pb-1 gap-12 text-workwith font-poppins">
                            <div className="text-lg px-5 py-3 border-workwithborder border rounded-lg bg-card">
                                Facebook{" "}
                            </div>
                            <div className="text-lg py-3 px-5 border-workwithborder border rounded-lg bg-card ">
                                Code St{" "}
                            </div>
                            <div className="text-lg py-3 px-5 border-workwithborder border rounded-lg bg-card">
                                Google{" "}
                            </div>
                            <div className="text-lg py-3 px-5 border-workwithborder border rounded-lg bg-card">
                                Twitter{" "}
                            </div>
                            <div className="text-lg py-3 px-5 border-workwithborder bg-card border rounded-lg ">
                                Amazon{" "}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
