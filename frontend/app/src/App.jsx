import { useState } from "react";
import "./App.scss";
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
        <span> </span>
        <span></span>
        <span></span>
        <span> </span>
        <span></span>
        <span></span>
        <span> </span>
        <span></span>
        <span></span>
        <span> </span>
        <span></span>
        <span></span>
        <span> </span>
        <span></span>
        <span></span>
        <span> </span>
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
    <div class = "visibledevice">
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
      <span> </span>
          <span></span>
          <span></span>
          <span> </span>
          <span></span>
          <span></span>
          <span> </span>
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
