import { FaFigma, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiBootstrapLine, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiVercel } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between my-10 md:h-[500px] ">
      {/* texts */}
      <div className=" md:w-[49%] " data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
          My Expertise
        </h2>
        <ul className="my-5 text-xl ">
          <li className="hover:text-[#0be890]  duration-300">I can work using these technologies.</li>
          <li className="hover:text-[#0be890]  duration-300">I have completed many projects using them.</li>
          <li className="hover:text-[#0be890]  duration-300">I have a good understanding of these technologies</li>
        </ul>

        <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
          My Soft skills
        </h2>
        <ul className="my-5 text-xl ">
          <li className="hover:text-[#0be890]  duration-300">computer hardware & software</li>
          <li className="hover:text-[#0be890]  duration-300">Communication</li>
          <li className="hover:text-[#0be890]  duration-300">Leadership</li>
          <li className="hover:text-[#0be890]  duration-300">Team-playing ability</li>
          <li className="hover:text-[#0be890]  duration-300">Time Management</li>
          <li className="hover:text-[#0be890]  duration-300">Adaptability</li>
          <li className="hover:text-[#0be890]  duration-300">Quick Learner</li>
          <li className="hover:text-[#0be890]  duration-300">Responsibility..</li>
        </ul>
      </div>
      {/* icons */}

      <div
        className="flex flex-wrap gap-8 md:w-[45%] justify-center "
        data-aos="fade-up"
      >
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="HTML"
        >
          <FaHtml5 />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="CSS"
        >
          <FaCss3Alt />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Tailwind CSS"
        >
          <RiTailwindCssFill />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="bootstrap"
        >
          <RiBootstrapLine />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="javascript"
        >
          <IoLogoJavascript />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="mongodb"
        >
          <DiMongodb />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Express.js"
        >
          <SiExpress />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="react.js"
        >
          <FaReact />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="node.js"
        >
          <FaNodeJs />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Firebase"
        >
          <IoLogoFirebase />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Github"
        >
          <FaGithub />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Netlify"
        >
          <BiLogoNetlify />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Figma"
        >
          <FaFigma />
        </div>
        <div
          className=" text-[80px] hover:text-[#0be890] hover:scale-105 duration-300 tooltip translate-x-5 ease-out "
          data-tip="Vercel"
        >
          <SiVercel />
        </div>
      </div>
    </div>
  );
};

export default Skills;
