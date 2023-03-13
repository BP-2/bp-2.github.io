import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./ContactPage";
import Projects from "./Projects";
import About from "./About";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
