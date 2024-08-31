// import { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa6";

const ProjectsCard = ({ project }) => {
  
  // const [Loading, setLoading] = useState(true);

  // if (Loading) {
  //   return (
  //     <div className="flex w-[350px] flex-col gap-4 pt-5">
  //       <div className="skeleton h-[200px] w-full"></div>
  //       <div className="skeleton h-4 w-full"></div>
  //       <div className="skeleton h-4 w-full"></div>
  //       <div className="skeleton h-4 w-full"></div>
  //     </div>
  //   );
  // }

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  
  // }, []);

  return (
    <div
      className="card card-compact w-[350px]  bg-base-100 shadow-xl "
      data-aos="fade-up"
    >
      <figure>
        <img
          className="  h-[200px] w-[370px]"
          src={project.image }
          alt="image not found yet"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>

        <div className="card-actions flex justify-around">
          <a href={project?.clintLink} className="btn flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"><FaGithub></FaGithub> clint </a>
            {
              project?.ServerLink?<a href={project?.ServerLink} className="btn flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"><FaGithub></FaGithub> server </a>:""
            }
          <a
            href={project.liveLink}
            className="btn flex-1  text-black bg-[#0be890]  hover:bg-white hover:text-black"
          >
            live links
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
