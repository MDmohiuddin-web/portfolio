import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer flex justify-center py-10 items-center text-center ">
      <div
        className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
        data-tip="linkedin"
      >
        <a href="https://www.linkedin.com/in/mohammedmohiuddin/">
          <FaLinkedin />
        </a>
      </div>

      <div
        className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
        data-tip="facebook"
      >
        <a href="https://www.facebook.com/mdmohiuddin.hafiz?mibextid=JRoKGi">
          <FaSquareFacebook />
        </a>
      </div>
      <div
        className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
        data-tip="whatsapp"
      >
        <a href="tel:+8801865540885">
          <FaSquareWhatsapp />
        </a>
      </div>

      <div className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out " data-tip="email">
       <p> <a href="mailto:mohiu5204@gmail.com" > <MdEmail /></a></p>
       
        </div>

      <div
        className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
        data-tip="github"
      >
        <a href="https://github.com/MDmohiuddin-web">
          <FaGithub />
        </a>
      </div>

      

      <div
        className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
        data-tip="x"
      >
        <a href="https://x.com/MohiUddin_2000">
          <FaSquareXTwitter />
        </a>
      </div>
      
      {/* <p>Copyright © 2024 - All right reserved</p> */} 
    </footer>
  );
};

export default Footer;
