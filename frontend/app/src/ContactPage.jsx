import { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="content">
        <div className="paralax">
          <ul>
            <li>
              <a href="#"> &#10047; </a>
            </li>
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/Projects"}> Projects </Link>
            </li>
            <li>
              <Link to={"/About"}> About </Link>
            </li>
            <li>
              <Link to={"/Contact"}> Contact </Link>
            </li>
          </ul>
          <ContactCard></ContactCard>
          <div className="layer rocks2"></div>
          <div className="layer rocks1"></div>
          <div className="layer hills"></div>
          <div className="layer foreground"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
