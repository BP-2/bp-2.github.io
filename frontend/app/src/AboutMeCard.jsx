import { useState } from "react";
import "./AboutMe.scss";
import { Link } from "react-router-dom";

function AboutMeCard() {
  const [count, setCount] = useState(0);
  return (
    <div class="container">
      <div class="card-three">
       <h1 class = "computer-text">User: <b class="comp-link">Brady Phelps </b></h1>
       <h2 class = "computer-text">Year: <b class="comp-link">Sophomore</b></h2>
       <h2 class = "computer-text">Major: <b class="comp-link">Advanced Computing </b></h2>
       <h2 class = "computer-text">College: <b class="comp-link">Ohio University </b></h2>
       <h2 class = "computer-text">Social Media: <a class = "comp-link" href="https://www.linkedin.com/in/brady-phelps-54a374215/"><u>LinkedIn</u></a> <a class = "comp-link" href="https://github.com/BP-2"><u>GitHub</u></a> <a class = "comp-link" href = "mailto: info@brady-phelps.dv"><u>Email</u></a></h2>
      </div>
    </div>
  );
}

export default AboutMeCard;
