const ProjectsCard = ({ project }) => {
  return (
    
      <div className="card card-compact max-w-96  bg-base-100 shadow-xl " data-aos="fade-up">
        <figure>
          <img
            className="  h-[200px] w-[370px]"
            src={project.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions flex">
            <a
              href={project.liveLink}
              className="btn w-full  text-black bg-[#0be890]  hover:bg-white hover:text-black"
            >
              live links{" "}
            </a>
            {/* <a href="https://github.com/MDmohiuddin-web/car-doctor-clint" className="btn w-full  text-black bg-[#0be890]  hover:bg-white hover:text-black">github repo </a>
            <a href="https://github.com/MDmohiuddin-web/car-doctor-server" className="btn w-full  text-black bg-[#0be890]  hover:bg-white hover:text-black">github repo </a> */}
          </div>
        </div>
      </div>
    
  );
};

export default ProjectsCard;
