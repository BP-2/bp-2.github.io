import { useState } from "react";
import "./App.scss";
import "./Projects.scss";
import GitHub from "./Github";
import { Link } from "react-router-dom";


function Projects() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <div className="navbar">
        <Link className = "logo" to={"/"}>BP</Link>
        <Link className="nav-link" to={"/"}>
          {" "}
          Home{" "}
        </Link>

        <Link className="nav-link" to={"/Projects"}>
          {" "}
          Projects{" "}
        </Link>

        <Link className="nav-link" to={"/About"}>
          {" "}
          About{" "}
        </Link>

        <Link className="nav-link" to={"/Contact"}>
          {" "}
          Contact{" "}
        </Link>
        
      </div>
      <div className= "visibledevice">
        <h1 className = "heading">Hi, I'm Brady</h1>
      </div>
      <div className = "visibledesktop">
        <div className="construction">
          <h1>Currently under construction.  Try visiting my <a href="https://github.com/BP-2">GitHub</a> for some projects! not mobile </h1>
        </div>
      </div>
      

    </div>

  );
}

export default Projects;
