import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Redhat from "../Assets/Redhat.png";

const ProjectTimeline = ({ project }) => {
  
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(27,27,27)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(27,27,27)" }}
      date={project.date}
      iconStyle={{ background: "rgb(27,27,27)", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.icon}
            alt={project.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">{project.title}</h3>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {project.points.map((point, index) => (
          <li key={index} className="text-white text-[14px] pl-1 tracking-wider font-Chakra_Petch">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const RecentWorks = () => {
  const projects = [
    {
      title: "Microsoft Todo Clone",
      company_name: "Starbucks",
      icon: Redhat,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Frontend developed using React framework",
        "Used tailwind css, framer-motions for styling and animations. Express js to write backend  code. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "User Authentication, Add to calander, Notification, Update, check notes available.",
      ],
    },
    {
      title: "Sastodeal Clone",
      company_name: "Tesla",
      icon: Redhat,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Frontend developed using React framework",
        "Used tailwind css, framer-motions for styling and animations. Express js to write backend  code. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "User Authentication, Add to products, Update products, Add to cart, and more features like complete e-commerce.",
        
      ],
    },
    {
      title: "3D Portfolio site",
      company_name: "Shopify",
      icon: Redhat,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
       "Frontend developed using React framework",
        "Used tailwind css, framer-motions for styling and animations. Express js to write backend  code. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Used react three js for 3d animations and other 3d stuff",
      ],
    },
    {
      title: "Chat App",
      company_name: "Meta",
      icon: Redhat,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Frontend developed using React framework",
        "Used tailwind css, framer-motions for styling and animations. Express js to write backend  code. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Used web socket for real time messaging services"
        
      ],
    },
  ];

  return (
    <div className=" mt-24  flex flex-col gap-4" id="recentsWorks">
      <div className="text-white flex flex-col justify-center items-center gap-3">
        <h1 className="xs:text-[60px] text-[48px] leading-[48px] xs:leading-[60px] font-black font-poppins">Projects</h1>
        <span className="xs:text-xl text-base font-semibold font-poppins text-navText ">
          WHAT I HAVE DONE SO FAR.
        </span>
      </div>
      <div className="md:mx-32 sm:mx-20 mx-4">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectTimeline key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default RecentWorks;
