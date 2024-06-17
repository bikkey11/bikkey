import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaFacebook } from "react-icons/fa";
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: Redhat,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: Redhat,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: Redhat,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: Redhat,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  return (
    <div className=" mt-24 flex flex-col gap-4">
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
