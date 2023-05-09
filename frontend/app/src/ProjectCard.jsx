import { useState } from "react";
import "./App.scss";
import "./Projects.scss";

function ProjectCard(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="visibledevice">
        <div className="mobile-construction">
          <h1>
            Currently under construction. Try visiting my{" "}
            <a href="https://github.com/BP-2">GitHub</a> for some projects!
          </h1>
        </div>
      </div>
      <div className="visibledesktop">
        <div class="item  col-xs-4 col-lg-4">
          <div class="thumbnail">
            <h4 className="project-title"><a className = "title-link" href = {props.link}>{props.title}</a></h4>
            <img className="group list-group-image" src={props.image} alt="" />
            <div class="caption">
              <p class="project-description">
                {props.description}
              </p>
              <br/>
              <p class="project-description">
                Team: {props.team}
              </p>
              <div class="row">
                <div class="col-xs-12 col-md-6"></div>
                <div class="col-xs-12 col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
