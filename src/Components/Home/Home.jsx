// import { useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

import Projects from "../Projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {

  
//   const [Loading,setLoading]=useState(true);

//   if (Loading) {
//     return (
//       <div className="h-screen flex justify-center items-center ">
//        <span className="animate-pulse text-xl md:text-6xl text-[#0be890]">Loading ... </span>
//       </div>
//     );
// }

  return (
    <div >
      
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
