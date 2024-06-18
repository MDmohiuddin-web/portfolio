import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="text-white flex flex-col  md:w-1/2 m-auto md:h-[650px] items-left justify-center">
      <h1 className="text-4xl  my-3 font-bold text-left  ">
        {`Hello there, I'm`}
      </h1>
      <h2 className="text-4xl md:text-6xl my-3  ">
        mohi uddin <span className="text-[#0be890] ">.</span>
      </h2>
      <h2 className="text-3xl text-left font-bold md:my-3 ">
        {`i'm a `} <br />
        <span className="text-[#0be890] ">
          <Typewriter
            words={[
              "frontend developer",
              "MERN stack developer",
              "jr.fullstack developer",
            ]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <p className="my-3 font-Playwrite">
      Certainly! As a MERN Stack Developer, I wield the power of JavaScript to craft captivating digital experiences. My canvas? The web. My palette? HTML, CSS, and React. With each line of code, I breathe life into user interfaces, sculpt seamless interactions, and orchestrate content that dances across screens. Let’s build more than websites; let’s create immersive journeys that leave a lasting impression.
      </p>
      <Link
        to="/contact"
        className="btn w-[150px]  text-black bg-[#0be890]  hover:bg-white hover:text-black"
      >
        contact me
      </Link>
    </div>
  );
};

export default Hero;
