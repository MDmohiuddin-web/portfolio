import mohi_img from "../assets/a (3).png";
import mern_img from "../assets/mern.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-10 md:h-[650px] ">
      {/* for text */}
      <div className="md:w-[49%] text-left space-y-5">
        {/* 1 */}
        <div className="md:pr-[100px] h-1/2">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
          >
            ABOUT ME
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="my-5  font-roboto"
          >
            {`Hello, I’m Mohi Uddin, a passionate and experienced Web Developer. With a strong background in HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, Firebase, and WordPress, I specialize in crafting high-quality, responsive web pages. My mission is to understand my clients’ needs and guide them through the process of building their dream websites. Let’s collaborate and create something exceptional! `}
          </motion.p>
        </div>
        {/* 2 */}
        <div className="md:pr-[100px]   h-1/2">
          <motion.h2
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="text-4xl md:text-6xl my-3 text-[#0be890]"
          >
            MERN STACK
          </motion.h2>
          <motion.img
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            src={mern_img}
            alt=""
          />
        </div>
      </div>
      {/* for img */}
      <div className="md:w-[49%] ">
        <motion.img
          variants={SlideUp(0.8)}
          initial="initial"
          whileInView="animate"
          src={mohi_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
