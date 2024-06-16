import { useState } from "react";
import "./App.scss";
import "./Projects.scss";
import { Link } from "react-router-dom";
import AllProjects from "./AllProjects";
import QuantumProjects from "./QuantumProjects";
import VRProjects from "./VRProjects";
import WebProjects from "./WebProjects";
import ResearchProjects from "./ResearchProjects";
import OtherProjects from "./OtherProjects";
import Deploy from "open-web-ay";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    event.preventDefault();
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className="navbar">
        <Link className="site-logo" to={"/"}>
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
      <div className="visibledevice">
      <div className="top-mobile">
        <h1 className="overall-heading-mobile">Here are some of my projects :)</h1>
        <form>
        <div className="project-select-bar">
        <button
                className="project-button"
                onClick={() => handleCategoryChange("all")}
              >
                Highlights
              </button>
          <button
                className="project-button"
                onClick={() => handleCategoryChange("quantum")}
              >
                Quantum
              </button>
              <button
                className="project-button"
                onClick={() => handleCategoryChange("vr")}
              >
                VR
              </button>
              </div>
              <div className="project-select-bar">
              <button
                className="project-button"
                onClick={() => handleCategoryChange("web")}
              >
                Web
              </button>
              <button
                className="project-button"
                onClick={() => handleCategoryChange("other")}
              >
                Other
              </button>
          </div>
        </form>
          <div className = "bump-left">
          {selectedCategory === "all" && <AllProjects />}
            {selectedCategory === "quantum" && <QuantumProjects />}
            {selectedCategory === "vr" && <VRProjects />}
            {selectedCategory === "web" && <WebProjects />}
            {selectedCategory == "research" && <ResearchProjects/>}
            {selectedCategory == "other" && <OtherProjects/>}

            <br/><br/>
          </div>
          <h1 className="overall-heading">For more projects, please visit my <a className = "blue" href="https://github.com/BP-2">GitHub</a>!</h1>
            <br/><br/>
        </div>
      </div>
      <div className="visibledesktop">
        <div className="top">
        <h1 className="overall-heading">Here are some of my projects :)</h1>
        <form>
        <div className="project-select-bar">
        <button
                className="project-button"
                onClick={() => handleCategoryChange("all")}
              >
                Highlights
              </button>
          <button
                className="project-button"
                onClick={() => handleCategoryChange("quantum")}
              >
                Quantum
              </button>
              <button
                className="project-button"
                onClick={() => handleCategoryChange("vr")}
              >
                Visualizations
              </button>
              <button
                className="project-button"
                onClick={() => handleCategoryChange("web")}
              >
                Web
              </button>
              <button
                className="project-button"
                onClick={() => handleCategoryChange("other")}
              >
                Other
              </button>
          </div>
        </form>
          <div className = "bump-left">
          {selectedCategory === "all" && <AllProjects />}
            {selectedCategory === "quantum" && <QuantumProjects />}
            {selectedCategory === "vr" && <VRProjects />}
            {selectedCategory === "web" && <WebProjects />}
            {selectedCategory == "research" && <ResearchProjects/>}
            {selectedCategory == "other" && <OtherProjects/>}

            <br/><br/>
          </div>
          <h1 className="overall-heading">For more projects, please visit my <a className = "blue" href="https://github.com/BP-2">GitHub</a>!</h1>
            <br/><br/>
        </div>
      </div>
      <Deploy theme='orange'/>
    </div>
  );
}

export default Projects;
