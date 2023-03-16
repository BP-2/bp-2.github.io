import { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div class="visibledesktop">
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
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ContactCard />
      </div>
      <div class="visibledevice">
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
          <span></span>
          <span></span>
          <span> </span>
          <span></span>
          <span></span>
          <span> </span>
          <span></span>
        </div>
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
