import TechIcons from "./TechIcons";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
import SplitText from "../../animation/SplitText";

const Skills = () => {
  const handleAnimationComplete = () => {
    //console.log('All letters have animated!');
  };
  return (
    <div className="flex flex-wrap gap-5 justify-between my-10 md:min-h-[500px] ">
      {/* texts */}

      <TechIcons></TechIcons>
      <div className="w-full flex flex-wrap justify-between mt-10">
        <div>
          
          <SplitText
            text="My Soft Skills"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />


          <motion.ul
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="my-5 text-xl"
          >
            <li className="hover:text-[#0be890] duration-300">
              Computer hardware & software expertise
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Excellent communication skills
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Strong leadership abilities
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Effective team-playing capability
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Efficient time management skills
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Highly adaptable to new situations
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Quick and eager learner
            </li>
            <li className="hover:text-[#0be890] duration-300">
              Strong sense of responsibility
            </li>
          </motion.ul>
        </div>
        {/*  */}
        <div>

         

          <SplitText
            text="My Expertise"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <motion.ul
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="my-5 text-xl"
            
          >
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Proficient in various technologies.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Successfully completed numerous projects.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Strong understanding of these technologies.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Experienced in developing responsive and dynamic websites.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Skilled in using React and the MERN stack.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Adept at implementing core functionalities for web applications.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Familiar with Git and GitHub for version control.
            </li>
            <li className="hover:text-[#0be890] duration-300 mt-1">
              Contributed to open-source projects.
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
