import mohi_img from "../assets/a (3).png";
import mern_img from "../assets/mern.png";

const About = () => {
  return (
    
      <div  className="flex flex-col md:flex-row justify-center items-center my-10 md:h-[650px] ">
        {/* for text */}
        <div className="md:w-[49%] text-left space-y-5" data-aos="fade-up">
          {/* 1 */}
          <div className="md:pr-[100px] h-1/2">
            <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
              ABOUT ME
            </h2>
            <p className="my-5  font-roboto">{`Hello, I’m Mohi Uddin, a passionate and experienced Web Developer. With a strong background in HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, Firebase, and WordPress, I specialize in crafting high-quality, responsive web pages. My mission is to understand my clients’ needs and guide them through the process of building their dream websites. Let’s collaborate and create something exceptional! `}
            </p>
          </div>
          {/* 2 */}
          <div className="md:pr-[100px]   h-1/2">
            <h2 className="text-4xl md:text-6xl my-3 text-[#0be890]">
              MERN STACK
            </h2>
            <img src={mern_img} alt=""  />
          </div>
        </div>
        {/* for img */}
        <div className="md:w-[49%] "        data-aos="fade-up">
          <img src={mohi_img} alt="" />
        </div>


        
      </div>
    
  );
};

export default About;
