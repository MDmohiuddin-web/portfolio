// import { useEffect, useState } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animation";

const ProjectsCard = ({ project }) => {
  return (
    <motion.div
      variants={SlideUp(project.delay)}
      initial="initial"
      whileInView={"animate"}
      className="card card-compact w-[350px]  bg-base-100 shadow-xl border border-gray-700 tooltip"
      data-tip={`${project.framework}`}
    >
      <figure>
        <img
          className="  h-[200px] w-[370px]"
          src={project.image}
          alt="image not found yet"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        {/* <h2 className="font-bold">{project?.framework}</h2> */}

        <div className="card-actions flex justify-around flex-wrap gap-5 ">
          <a
            href={project?.clintLink}
            className="btn p-2 flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"
          >
            <FaGithub></FaGithub> clint{" "}
          </a>
          {project?.ServerLink ? (
            <a
              href={project?.ServerLink}
              className="btn p-2 flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"
            >
              <FaGithub></FaGithub> server{" "}
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <a
            href={project.liveLink}
            className="btn p-2 flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"
          >
            <FaExternalLinkAlt />
            live links
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
