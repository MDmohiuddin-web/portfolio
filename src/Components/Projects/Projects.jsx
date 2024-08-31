import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [item, setItem] = useState([]);
  const [DataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        // setLoading(false)
      });
  }, []);

  return (
    <div>
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl my-3 text-[#0be890] ">
          My Projects
        </h2>
      </div>

      <div className="my-10 flex flex-wrap gap-5 justify-between font-roboto">
        {item.slice(0, DataLength).map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
      {/*  */}
      <div
        className={`w-4/5 m-auto my-5 flex justify-center items-center ${
          DataLength === item.length && "hidden"
          //  DataLength === item.length ? "hidden":"contents"
        }`}
      >
        <button
          onClick={() => setDataLength(item.length)}
          className="btn   text-black bg-[#0be890]  hover:bg-white hover:text-black"
        >
          Show all data
        </button>
      </div>
    </div>
  );
};

export default Projects;
