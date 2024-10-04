import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer  items-center text-center ">
        <div className="md:w-4/5 m-auto flex  py-10 md:justify-center">
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
            data-tip="github"
          >
            <a href="https://github.com/MDmohiuddin-web">
              <FaGithub />
            </a>
          </div>

          <div
            className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300  translate-x-5 ease-out "
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

          <div
            className="text-4xl tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
            data-tip="email"
          >
            <p>
              
              <a href="mailto:mohiu5204@gmail.com">
                
                <MdEmail />
              </a>
            </p>
          </div>

          
          {/* <div
            className="text-4xl  tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out "
            data-tip="fiverr"
          >
            <a href="https://www.fiverr.com/moin218/create-responsive-and-dynamic-websites-using-react-and-mern-stack-8c40">
            <TbBrandFiverr />
            </a>
          </div> */}

          <div
            className="text-4xl  tooltip hover:text-[#0be890] hover:scale-105 duration-300 translate-x-5 ease-out pr-8 md:pr-0"
            data-tip="x"
          >
            <a href="https://x.com/MohiUddin_2000">
              <FaSquareXTwitter />
            </a>
          </div>
          
        </div>
      </footer>
      
      <div className="md:w-4/5 mx-auto text-center mb-5 capitalize font-Playwrite">
        <p> © 2024 - All right reserved by Mohi uddin</p>
      </div>
    </>
  );
};

export default Footer;
