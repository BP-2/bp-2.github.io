import { useState } from "react";
import "./App.scss";
import "./Projects.scss";
import maca from "./assets/maca-sc.png"
import oucare from "./assets/oucare.png"
import gglTui from "./assets/gglTui.png"
import smTui from "./assets/smTui.png"
import multiTh from "./assets/brady-poster2.png"
import ssVR from "./assets/ssVR.png"
import parkVR from "./assets/parkVR.png"
import robotAR from "./assets/robotAR.png"
import reactionVR from "./assets/reactionVR.png"
import simons from "./assets/simons.png"
import teleport from "./assets/teleport.png"
import march from "./assets/march.png"
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [count, setCount] = useState(0);
  
  let descriptionMaca = "Awarded grant to develop an immersive 360-degree experience for Mammoth Cave National Park, aimed at promoting accessibility and raising awareness of the park's natural wonders. This project will also serve as a powerful public relations tool, highlighting the park's unique beauty and historical significance. This was made using React, Vite, GitHub Pages, PanoRaven, Adobe Premier, and GoPro.";
  let descriptionOUCare = "Our winning project at Hackpalachia is aimed to bridge the gap between Ohio University students and healthcare resources. We aim to make healthcare more accessible and user-friendly for students.  Made using Yew, Rust, GitHub pages, Python, JavaScript, Twilio, and Azure.";
  let descriptionGgl = "This project aims to rethink the way users interact with the Google suite by creating a TUI (terminal user interface) interface. With this interface, users can seamlessly manage calendar events, send and read emails, access Gsuite applications, and even perform browser utility functions.  This project is designed to simplify and streamline the user experience, making it easier than ever to navigate the powerful tools available through the Google suite.  Made using Rust, Python, Cursive, Google API, and other libraries.";
  let descriptionSM = "This project brings the social media experience to the terminal. Users can create profiles, make friends, and engage with a variety of content by liking or disliking posts. With the ability to edit their own profile images and descriptions, users can easily express their unique personalities and connect with others who share their interests. This project also features an intuitive profile browsing feature, allowing users to explore a diverse range of profiles and discover new connections.  Made using Rust, Cursive, and the image library.";
  let descriptionMth = "Abstract: The Ohio University Navaid Performance Prediction Model is a globally used tool for the certification of navigational aid compliance and safety at airports. The main purpose of OUNPPM is to calculate multipath interference from structures close to the navigational aid equipment and provide corresponding error plots. Initially, OUNPPM created a single, fixed-precision ideal antenna pattern; this computation would halt the program until calculation completed which could take upwards of 30 seconds.  This research aims to increase productivity and interactivity by reducing jitter in the 3D accelerated context and implement dynamic rendering practices within the scope of OUNPPM.  This stands to benefit a variety of private, public, and military airports across the world.  Completed under the Choose Ohio First Grant.  Made using C++, multithreading, OpenGL, Cmake, and OUNPPM.";
  let descriptionSSVR = "Virtual Reality game meant to increase environmental and sustainability awareness.  The user walks around and restores local environments to their naturalized states.  Winner at BlossomHack.  Made with Unity, C#, and the Meta Quest 2.";
  let descriptionParkVR = "This project was done in collaboration with Ohio Health to create an Augmented or Virtual reality solution to a problem known as gait freeze which affects a large number of Parkinsons patients.  The application uses a variety of proven techniques, such as audio and visual ques.  This was made using Unity, C#, iPhone AR, Microsoft HoloLens 2, and the Meta Quest 2 Passthrough API.";
  let descriptionRobot = "This project was done in collaboration with THK Manufacturing on a research team comprised of largely graduate students.  The application creates an augmented reality interface for interaction of universal robot arms on a manufacturing line for increased productivity and automation.  Also created a virtual simulation environment to emulate the experience if robot arm is not readily available.  Made using Unity, C#, Microsoft HoloLens 2, Meta Quest 2 Passthrough API.";
  let descriptionReaction = "This project was made during a week in which I had no internet and wished to create a fitness app.  The applications functionality is similar to that of light up walls you might see at an arcade or sports training center where you press the button as it lights up extremely fast.  Made with Unity, C#, and Meta Quest 2.";
  let descriptionSimons = "This program uses the popular quantum algorithm Simons Algorithm to create an interactable program that users can input a bitstring into and see the algorithm create a circuit that computes the 2-1 pairs given the input bitstring.  This allows those learning quantum computing to see an example in which they can interact with.  Made using Python and Qiskit.";
  let descriptionTeleport = "This program performs quantum teleportation in a way which engages the user.  It asks for an origin bit, target bit, and a value to teleport.  It will then run the circuit and display the results to the terminal.  This allows those learning quantum computing to see an example in which they can interact with.  Made with Python and Qiskit.";
  let descriptionMarch = "This program uses the quantum hadamard gate and basic laws of probability to create march madness brackets using historical probabilities to guide the bracket.  Made using Python and Qiskit.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let judeshreffler = <a href = "https://github.com/jude-shreffler" className="blue">, jude-shreffler</a>;
  let GLYurek3 = <a href = "https://github.com/GLYurek3" className="blue">, GLYurek3</a>;
  let MonadoBarrage = <a href = "https://github.com/MonadoBarrager" className="blue">, MonadoBarrage</a>;
  let PrestonRembis = <a href = "https://github.com/PrestonRembis" className="blue">, PrestonRembis</a>;
  let AlexBikowski20 = <a href = "https://github.com/AlexBikowski20" className="blue">, AlexBikowski20</a>;
  let drchangliu = <a href = "https://www.ohio.edu/engineering/about/people/liuc" className="blue">, Dr. Chang Liu</a>;
  let WilliamKanieski = <a href = "https://github.com/WilliamKanieski" className="blue">, WilliamKanieski</a>;
  let krerkkiat = <a href = "https://github.com/krerkkiat" className="blue">, krerkkiat</a>;
  let ChadMourning = <a href = "https://scholar.google.com/citations?user=qUf84EkAAAAJ&hl=en" className="blue">, Dr. Chad Mourning</a>;


  
  
  return (
    <div>
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
      <div className="visibledevice">
      <div className="top-device">
        <h1 className="overall-heading-device">Here are some projects I have worked on outside of the classroom :)</h1>
          <div id="products" class="row list-group">
            <ProjectCard image = {maca} link = "https://brady-phelps.dev/maca-portfolio/" title = "MACA 360 Photo Gallery Site" description = {descriptionMaca} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {oucare} link = "https://ohio-software-development.github.io/hackpalachia-project/" title = "OU Care" description = {descriptionOUCare} team ={[bp2, judeshreffler, GLYurek3]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/ou-care">DevPost</a> </p>
            <ProjectCard image = {gglTui} link = "https://github.com/ohio-software-development/RustGoogleTUI" title = "Google TUI" description = {descriptionGgl} team = {[bp2, MonadoBarrage, PrestonRembis, AlexBikowski20]}></ProjectCard>
            <ProjectCard image = {smTui} link = "https://github.com/ohio-software-development/SocialMediaHackathonTui" title = "Social Media TUI" description = {descriptionSM} team = {[bp2, judeshreffler]}></ProjectCard>
            <ProjectCard image = {multiTh} link = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization" title = "Utilizing Multithreading for the Iterative Refinement of Antenna Pattern Visualization" description = {descriptionMth} team = {[bp2, ChadMourning]}></ProjectCard>
            <p className="project-description">Presented at: <a className="blue" href = "https://news.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse">The Ohio State House</a> and <a className="blue" href = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization">The Ohio Academy of Science</a></p>
            <br/>
            <ProjectCard image = {ssVR} link = "https://github.com/BP-2/SustainVR" title = "Sustain VR" description = {descriptionSSVR} team = {[bp2, WilliamKanieski]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/sustainvr">DevPost</a> </p>
            <ProjectCard image = {parkVR} link = "https://github.com/BP-2/ParkinsonsApp" title = "Parkinsons VR application with Ohio Health" description = {descriptionParkVR} team = {[bp2, drchangliu]}></ProjectCard>
            <ProjectCard image = {robotAR} link = "https://github.com/BP-2/articulations-robot-demo" title = "AR interface for universal robot controller" description = {descriptionRobot} team = {[bp2, krerkkiat, WilliamKanieski, drchangliu]}></ProjectCard>
            <ProjectCard image = {reactionVR} link = "https://github.com/BP-2/ReactionApp" title = "Fitness VR application" description = {descriptionReaction} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {simons} link = "https://github.com/BP-2/SimonsAlgorithm" title = "Interactive Simons Algorithm program" description = {descriptionSimons} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {teleport} link = "https://github.com/BP-2/QuantumTeleportation" title = "Quantum Teleportation program" description = {descriptionTeleport} team = {[bp2]}></ProjectCard> 
            <ProjectCard image = {march} link = "https://github.com/BP-2/Quantum-March-Madness" title = "Quantum March Madness" description = {descriptionMarch} team = {[bp2]}></ProjectCard>
            <br/><br/>
            <h1 className="overall-heading">For more projects, please visit my <a className = "blue" href="https://github.com/BP-2">GitHub</a>!</h1>
            <br/><br/>
          </div>
        </div>
      </div>
      <div className="visibledesktop">
        <div className="top">
        <h1 className="overall-heading">Here are some projects I have worked on outside of the classroom :)</h1>
          <div id="products" class="row list-group">
            <ProjectCard image = {maca} link = "https://brady-phelps.dev/maca-portfolio/" title = "MACA 360 Photo Gallery Site" description = {descriptionMaca} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {oucare} link = "https://ohio-software-development.github.io/hackpalachia-project/" title = "OU Care" description = {descriptionOUCare} team ={[bp2, judeshreffler, GLYurek3]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/ou-care">DevPost</a> </p>
            <ProjectCard image = {gglTui} link = "https://github.com/ohio-software-development/RustGoogleTUI" title = "Google TUI" description = {descriptionGgl} team = {[bp2, MonadoBarrage, PrestonRembis, AlexBikowski20]}></ProjectCard>
            <ProjectCard image = {smTui} link = "https://github.com/ohio-software-development/SocialMediaHackathonTui" title = "Social Media TUI" description = {descriptionSM} team = {[bp2, judeshreffler]}></ProjectCard>
            <ProjectCard image = {multiTh} link = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization" title = "Utilizing Multithreading for the Iterative Refinement of Antenna Pattern Visualization" description = {descriptionMth} team = {[bp2, ChadMourning]}></ProjectCard>
            <p className="project-description">Presented at: <a className="blue" href = "https://news.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse">The Ohio State House</a> and <a className="blue" href = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization">The Ohio Academy of Science</a></p>
            <br/>
            <ProjectCard image = {ssVR} link = "https://github.com/BP-2/SustainVR" title = "Sustain VR" description = {descriptionSSVR} team = {[bp2, WilliamKanieski]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/sustainvr">DevPost</a> </p>
            <ProjectCard image = {parkVR} link = "https://github.com/BP-2/ParkinsonsApp" title = "Parkinsons VR application with Ohio Health" description = {descriptionParkVR} team = {[bp2, drchangliu]}></ProjectCard>
            <ProjectCard image = {robotAR} link = "https://github.com/BP-2/articulations-robot-demo" title = "AR interface for universal robot controller" description = {descriptionRobot} team = {[bp2, krerkkiat, WilliamKanieski, drchangliu]}></ProjectCard>
            <ProjectCard image = {reactionVR} link = "https://github.com/BP-2/ReactionApp" title = "Fitness VR application" description = {descriptionReaction} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {simons} link = "https://github.com/BP-2/SimonsAlgorithm" title = "Interactive Simons Algorithm program" description = {descriptionSimons} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {teleport} link = "https://github.com/BP-2/QuantumTeleportation" title = "Quantum Teleportation program" description = {descriptionTeleport} team = {[bp2]}></ProjectCard> 
            <ProjectCard image = {march} link = "https://github.com/BP-2/Quantum-March-Madness" title = "Quantum March Madness" description = {descriptionMarch} team = {[bp2]}></ProjectCard>
            <br/><br/>
            <h1 className="overall-heading">For more projects, please visit my <a className = "blue" href="https://github.com/BP-2">GitHub</a>!</h1>
            <br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
