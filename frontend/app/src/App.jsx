import { useState } from "react";
import "./App.scss";
import linkdin from "./assets/linkedin2.png";
import github from "./assets/github-trans.png";
import scholar from "./assets/scholar.png";
import { Link } from "react-router-dom";
import Deploy from "open-web-ay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div className="visibledesktop">
      <div className="navbar">
        <Link className = "site-logo" to={"/"}>BP</Link>
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
      <a href = "https://scholar.google.com/citations?user=F0cpYusAAAAJ&hl=en&oi=ao"><img src = {scholar} className="logo-links"></img></a>
      </div>
      <h2 className="sub-heading">Checkout my <a href="https://brady-phelps.dev/research-portfolio/" className="research-link">research website</a>!</h2>
      </div>
    </div>
    <div className = "visibledevice">
    <div className="navbar">
        <Link className = "site-logo" to={"/"}>BP</Link>
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

      </div>
      <div className="heading-div">
      <h1 className = "heading">Hi, I'm Brady</h1>
      <h2 className="sub-heading">let's code!</h2>
      <div className="logo-display">
      <a href = "https://www.linkedin.com/in/brady-phelps-54a374215/"><img src = {linkdin} className="logo-links"></img></a>
      <a href = "https://github.com/BP-2"><img src = {github} className="logo-links"></img></a>
      <a href = "https://scholar.google.com/citations?user=F0cpYusAAAAJ&hl=en&oi=ao"><img src = {scholar} className="logo-links"></img></a>
      </div>
      <h2 className="sub-heading">Checkout my <a href="https://brady-phelps.dev/research-portfolio/" className="research-link">research website</a>!</h2>
      </div>
    </div>
    <Deploy theme='orange'/>

    </div>
  );
}

export default App;
