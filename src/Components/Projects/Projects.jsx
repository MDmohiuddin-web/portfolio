import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { SlideUp } from "../../animation/animation";
import { motion } from "framer-motion";
import SplitText from "../../animation/SplitText";

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

  const handleAnimationComplete = () => {
    // console.log('All letters have animated!');
  };

  return (
    <div>
      <div className="w-4/5 mx-auto text-center">

        
        <SplitText
            text="My Projects"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />


        <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className=" text-sm py-3"
          >
            there is my some projects example
          </motion.p>
      </div>

      <div className="my-10 flex flex-wrap gap-5 justify-between font-roboto">
        {item.slice(0, DataLength).map((project) => (
          <ProjectsCard key={project?.id} project={project} />
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
          className="btn   text-black bg-[#0be890]  hover:bg-white hover:text-black "
        >
          Show all data
        </button>
      </div>
    </div>
  );
};

export default Projects;
