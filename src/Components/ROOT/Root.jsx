import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Root = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout=setTimeout(() => {
      setLoading(false)
    }, 2000);
    Aos.init();
    return ()=>clearTimeout(timeout)
  }, []);




  if (Loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <span className="animate-pulse text-xl md:text-6xl text-[#0be890] transition delay-300">
          Loading ...
        </span>
      </div>
    );
  }

  return (
    <div className="capitalize" >
      <Navbar></Navbar>
      <div className="w-[90%]  m-auto capitalize font-roboto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
    
  );
};

export default Root;
