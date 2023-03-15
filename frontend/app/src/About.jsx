import { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";

function About() {
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
    </div>
  );
}

export default About;
