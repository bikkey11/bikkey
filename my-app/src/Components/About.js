import React from 'react';
import reactImg from "../Assets/react.png";
import pythonImg from "../Assets/Python.png";
import nodejsImg from "../Assets/Nodejs.png";
import Mlimg from "../Assets/ML.png";

const OverviewCard = ({ index, title, icon }) => {
    return (

        <div className='w-[250px] h-max   hover:animate-[hoverCard_2s_ease_forwards] '>
            <div className='bg-card border rounded-[20px] py-5 px-2 min-h-72 flex flex-col justify-evenly items-center shadow-sm shadow-tertiary'>
                <img src={icon} className='w-16 h-16 object-contain ' alt="web developnent" />
                <h3 className='text-navText text-[20px] font-bold text-center font-poppins'>{title}</h3>
            </div>

        </div>

    )
}

const About = () => {
    const services = [
        {
            title: "React Developer",
            icon: reactImg,
        },
        {
            title: "Python Developer",
            icon: pythonImg,
        },
        {
            title: "Node Js Developer",
            icon: nodejsImg,
        },
        {
            title: "Machine learning",
            icon: Mlimg,
        },
    ];
 
    return (
        <div className='flex flex-col flex-wrap mb-10' id='about'>
            <div className='md:mx-32 mx-10'>
                <h1 className='animate-[aboutText_1s_ease_forwards] opacity-0 font-poppins text-navText text-[26px] xs:text-[30px] font-medium leading-[40px]'>Introduction</h1>
                <h2 className='animate-[aboutText_1s_ease_200ms_forwards] opacity-0 xs:leading-[80px] font-poppins font-black text-white text-[60px] xs:text-[80px] leading-[60px] '>Overview.</h2>
                <p className= 'animate-[aboutText_1s_ease_400ms_forwards] opacity-0  mt-4 text-navText xs:text-[17px] text-sm max-w-3xl font-Chakra_Petch'> I'm a skilled web developer with experience in Javascript and expertise in framework like React, Node.js, Three.js. Have good knowledge of database like MySQL, MongoDB, Firebase. I'm a quick learner and collaborate closely with client to create efficient, scalable, and user friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
            </div>

            <div className='animate-[aboutCard_2s_ease_forwards] opacity-0 flex  flex-wrap mt-20  gap-10 justify-center items-center my-20'>
                {
                    services.map((service, index) => (
                        <OverviewCard key={index} index={index}{...service} />
                    ))
                }


            </div>

        </div>
    )
}

export default About

