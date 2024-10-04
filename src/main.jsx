import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Contact from "./Components/Contact/Contact.jsx";

import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Root from "./Components/ROOT/Root.jsx";
import About from "./Components/About/About.jsx";

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
