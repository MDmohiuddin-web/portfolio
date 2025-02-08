import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiBootstrapLine,
  RiNextjsLine,
} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiMongoose, SiTypescript, SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoFirebase, IoShieldSharp } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SplitText from "../../animation/SplitText";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TechIcons = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleAnimationComplete = () => {
    //console.log('All letters have animated!');
  };

  return (
    <>
      <div className="w-full text-center">

        
        <SplitText
            text="My skills"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />


        <br />
      </div>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap gap-8 md:w-4/5 justify-center m-auto pr-10"
        data-aos="fade-up"
      >
        {[
          { icon: <FaHtml5 />, tip: "HTML" },
          { icon: <FaCss3Alt />, tip: "CSS" },
          { icon: <RiTailwindCssFill />, tip: "Tailwind CSS" },
          { icon: <RiBootstrapLine />, tip: "Bootstrap" },
          { icon: <IoLogoJavascript />, tip: "JavaScript" },
          { icon: <SiTypescript />, tip: "Typescript" },
          { icon: <DiMongodb />, tip: "MongoDB" },
          { icon: <SiMongoose />, tip: "Mongoose" },
          { icon: <SiExpress />, tip: "Express.js" },
          { icon: <FaReact />, tip: "React.js" },
          { icon: <FaNodeJs />, tip: "Node.js" },
          { icon: <RiNextjsLine />, tip: "Next.js" },
          { icon: <IoLogoFirebase />, tip: "Firebase" },
          { icon: <IoShieldSharp />, tip: "next-auth" },
          { icon: <FaGithub />, tip: "GitHub" },
          { icon: <BiLogoNetlify />, tip: "Netlify" },
          { icon: <FaFigma />, tip: "Figma" },
          { icon: <SiVercel />, tip: "Vercel" },
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="md:text-[80px] text-4xl text-center hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out 
          transition-all flex flex-col items-center justify-center 
          "
            data-tip={tech.tip}
            variants={item}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default TechIcons;
