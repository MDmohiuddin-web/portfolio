import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [item, setItem] = useState([]);
  const [DataLength, setDataLength] = useState(6);

  // const [Loading,setLoading]=useState(true);
  // if (Loading) {
  //   return (
  //     <div className="h-screen flex justify-center items-center text-4xl">
  //      <span className="animate-pulse text-xl md:text-6xl text-[#0be890]">Loading ... </span>
  //     </div>
  //   );
  // }
  

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
