const ProjectsCard = ({ project }) => {

  
  return (
    
      <div className="card card-compact w-[350px]  bg-base-100 shadow-xl " data-aos="fade-up">
        <figure>
          <img
            className="  h-[200px] w-[370px]"
            src={project.image}
            alt="image not found yet"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          
          <div className="card-actions flex">
            {/* <a href={project?.clintLink} className="btn   text-black bg-[#0be890]  hover:bg-white hover:text-black">github for clint </a>
            <a href={project?.ServerLink} className="btn   text-black bg-[#0be890]  hover:bg-white hover:text-black">github for server </a> */}
            <a
              href={project.liveLink}
              className="btn  w-full text-black bg-[#0be890]  hover:bg-white hover:text-black"
            >
              live links
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default ProjectsCard;
