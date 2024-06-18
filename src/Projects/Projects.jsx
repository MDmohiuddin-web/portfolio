import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setItem(data))
  }, []);

  return (
    <div className="my-10 flex flex-wrap gap-5 justify-between font-Playwrite" >
      {
      item.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))
      }
      
    </div>
  );
};

export default Projects;
