import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./ROOT/Root.jsx";
import Home from "./Home/Home.jsx";
import Hero from "./Hero/Hero.jsx";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from "./skills/Skills.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hero",
        element: <Hero></Hero>,
      },{
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Projects",
        element: <Projects></Projects>,
      },
      {
        path:'skills',
        element:<Skills></Skills>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
