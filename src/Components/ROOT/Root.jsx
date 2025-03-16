import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import SplashCursor from "../../animation/SplashCursor";
import Whatsapp from "../../utils/Whatsapp";

const Root = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    Aos.init();
    return () => clearTimeout(timeout);
  }, []);

  if (Loading) {
    return (
      <Loader></Loader>
      
    );
  }

  return (
    <div className="capitalize">
      <Navbar></Navbar>
      <div className="w-[90%]  m-auto capitalize font-roboto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
      <SplashCursor></SplashCursor>
    </div>
  );
};

export default Root;
