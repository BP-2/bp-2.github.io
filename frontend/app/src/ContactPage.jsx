import { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="visibledesktop">
        <div className="navbar">
          <Link className="logo" to={"/"}>
            BP
          </Link>
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

        <div className = "center-form">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsLIJMlIf9WwGzlGjz8sEQJnT6oysj8jVDz8XppkYhcjzjKA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
      <div className="visibledevice">
        <div className="navbar">
          <Link className="logo" to={"/"}>
            BP
          </Link>
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
        <div className="bubbles">
          <span> </span>
          <span></span>
          <span></span>
          <span> </span>
          <span></span>
          <span></span>
          <span> </span>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsLIJMlIf9WwGzlGjz8sEQJnT6oysj8jVDz8XppkYhcjzjKA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
}

export default Contact;
