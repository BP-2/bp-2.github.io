import { useState } from "react";
import "./App.scss";
import linkdin from "./assets/linkedin2.png";
import github from "./assets/github-trans.png";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div className="visibledesktop">
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
      <div className = "bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="heading-div">
      <h1 className = "heading">Hi, I'm Brady</h1>
      <h2 className="sub-heading">let's code!</h2>
      <div className="logo-display">
      <a href = "https://www.linkedin.com/in/brady-phelps-54a374215/"><img src = {linkdin} className="logo-links"></img></a>
      <a href = "https://github.com/BP-2"><img src = {github} className="logo-links"></img></a>
      </div>
      </div>
    </div>
    <div className = "visibledevice">
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
      <div className = "bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div className="heading-div">
      <h1 className = "heading">Hi, I'm Brady</h1>
      <h2 className="sub-heading">let's code!</h2>
      </div>
    </div>
    </div>
  );
}

export default App;
