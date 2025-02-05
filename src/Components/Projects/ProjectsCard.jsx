import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SlideUp } from "../../animation/animation";
import { IoIosInformationCircle } from 'react-icons/io';

const ProjectsCard = ({ project }) => {
  const modalId = `modal_${project?.id}`;

  return (
    <motion.div
      variants={SlideUp(project?.delay)}
      initial="initial"
      whileInView={"animate"}
      className="card card-compact w-[350px] bg-base-100 shadow-xl border border-gray-700 tooltip"
      data-tip={`${project?.framework}`}
    >
      <figure>
        <img
          className="h-[200px] w-[370px]"
          src={project?.image}
          alt="image not found yet"
        />
      </figure>
      <div className="card-body relative">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl">{project?.title}</h2>
          {
            project.description ? (<><button onClick={() => document.getElementById(modalId).showModal()}>
              <IoIosInformationCircle className="text-2xl" />
            </button>
              <dialog id={modalId} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Project Shot details</h3>
                  <p className="py-4">{project?.description || "soon updating ..."}</p>
                  <div className="flex justify-between gap-5 text-left">
                    <div className="w-1/2">
                      <h4 className="font-bold">Features</h4>
                      <ul className="flex flex-col flex-wrap">
                        {project?.features?.map((feature, index) => (
                          <li key={index}># {feature || "soon updating ..."}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/2">
                      <h4 className="font-bold">Technologies</h4>
                      <ul className="flex flex-row flex-wrap">
                        {project?.technologies?.map((technology, index) => (
                          <li key={index}># {technology || "soon updating ..."}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </dialog></>) : ''
          }
        </div>

        <div className="card-actions flex justify-around flex-wrap gap-5">
          <a
            href={project?.clintLink}
            className="btn p-2 flex-1 text-black bg-[#0be890] hover:bg-white hover:text-black"
          >
            <FaGithub /> clint
          </a>
          {project?.ServerLink && (
            <a
              href={project?.ServerLink}
              className="btn p-2 flex-1 text-black bg-[#0be890] hover:bg-white hover:text-black"
            >
              <FaGithub /> server
            </a>
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <a
            href={project?.liveLink}
            className="btn p-2 flex-1 text-black bg-[#0be890] hover:bg-white hover:text-black"
          >
            <FaExternalLinkAlt /> live links
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;

