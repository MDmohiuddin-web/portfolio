import { Link, NavLink } from "react-router-dom";
import cv from "../assets/Mohiuddin_cv.pdf";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("forest");

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("forest");
    }
  };

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const nav = (
    <>
      <li className=" hover:text-[#0be890]  ">
        <NavLink to="/">Home </NavLink>
      </li>
      
      <li className="hover:text-[#0be890]  ">
        <NavLink to="/about">About </NavLink>
      </li>
      <li className="hover:text-[#0be890]  ">
        <NavLink to="/Projects">Projects </NavLink>
      </li>
      <li className="hover:text-[#0be890]  ">
        <NavLink to="/skills">skills </NavLink>
      </li>
      <li className="hover:text-[#0be890]  ">
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
        <Link
          to="/"
          className="btn btn-ghost text-2xl text-[#0be890] font-sans font-bold "
        >
          Mohi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* nav */}
          {nav}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a
          className="btn btn-outline text-[#0be890]  hover:bg-white hover:text-[#0be890] "
          href={cv}
          download="MohiUddin-Resume.pdf" 
        >
          My Resume
        </a>

        {/* theme toggle */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
