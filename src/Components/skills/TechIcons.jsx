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
import { SiExpress, SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoFirebase, IoShieldSharp } from "react-icons/io5";

const TechIcons = () => (
  <div
    className="flex flex-wrap gap-8 md:w-4/5 justify-center m-auto pr-10"
    data-aos="fade-up"
  >
    <div className="w-full text-center">
      
      <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">My skills</h2>
      <br />
    </div>
    {[
      { icon: <FaHtml5 />, tip: "HTML" },
      { icon: <FaCss3Alt />, tip: "CSS" },
      { icon: <RiTailwindCssFill />, tip: "Tailwind CSS" },
      { icon: <RiBootstrapLine />, tip: "Bootstrap" },
      { icon: <IoLogoJavascript />, tip: "JavaScript" },
      { icon: <DiMongodb />, tip: "MongoDB" },
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
      <div
        key={index}
        className="md:text-[80px] text-4xl text-center hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out 
        transition-all flex flex-col items-center justify-center 
        "
        data-tip={tech.tip}
      >
        {tech.icon}
      </div>
    ))}
  </div>
);

export default TechIcons;
