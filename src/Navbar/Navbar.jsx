import { Link, NavLink } from "react-router-dom";
import cv from "../assets/Mohiuddin_cv.pdf";

const Navbar = () => {
  const nav = (
    <>
      <li className=" hover:text-[#0be890]  text-white">
        <NavLink to="/">Home </NavLink>
      </li>
      {/* <li className="hover:text-[#0be890]  text-white">
        <NavLink to="/hero">hero </NavLink>
      </li> */}
      <li className="hover:text-[#0be890]  text-white">
        <NavLink to="/about">About </NavLink>
      </li>
      <li className="hover:text-[#0be890]  text-white">
        <NavLink to="/Projects">Projects </NavLink>
      </li>
      <li className="hover:text-[#0be890]  text-white">
        <NavLink to="/skills">skills </NavLink>
      </li>
      <li className="hover:text-[#0be890]  text-white">
        <NavLink to="/contact">Contact </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-5 font-">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* nav */}
            {nav}
          </ul>
        </div>
        {/* <a >Mohi</a> */}
        <Link to='/' className="btn btn-ghost text-2xl text-[#0be890] font-sans font-bold">Mohi
        
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* nav */}
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-[#0be890] hover:text-white hover:bg-base-100" href={cv} download='MohiUddin_cv'>
         my Resume
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
