import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import ScrollToTop from "react-scroll-to-top";

import Projects from "../Projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div>
      
     

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <ScrollToTop
        smooth
        style={{
          padding: "6px",
          background: "#0be890",
          color: "black",
          margin: "auto",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Home;

