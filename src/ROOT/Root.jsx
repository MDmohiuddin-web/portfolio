import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="capitalize" data-aos="fade-down">
      <div className="w-[90%] text-white m-auto capitalize font-Playwrite">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
