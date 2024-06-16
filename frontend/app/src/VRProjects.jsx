import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import maca from "./assets/maca-sc.png"
import ssVR from "./assets/ssVR.png"
import parkVR from "./assets/parkVR.png"
import robotAR from "./assets/robotAR.png"
import reactionVR from "./assets/reactionVR.png"
import nbody from "./assets/nbody.png"
import icns from "./assets/snoopWithTool.png"
import multiTh from "./assets/brady-poster2.png"


function VRProjects() {
    let descriptionMth = "Utilized parallelism and multithreading for a variety of upgrades and research for optimizing antenna pattern visualizations within OUNPPM. Research related to this work is published in both AIAA SciTech and AIAA Region 3 Student Conference (winning second place for undergraduate student research competition). Related work has also been presented at the Ohio State House (2x) and the Ohio Academy of Science.";

  let descriptionICNS = "Presented protocol on quantum key distribution to secure ADS-B at ICNS. The protocol explored quantum applications within aviation, and also implored a simulation to communicate effectiveness of protocol."
  let descriptionNbody = "Constructed an NBody simulation using a BH-tree structure in my very own game engine. This project utilized C++ and OpenGL.";
  let descriptionMaca = "Awarded grant to develop an immersive 360-degree experience for Mammoth Cave National Park, aimed at promoting accessibility and raising awareness of the park's natural wonders. This project will also serve as a powerful public relations tool, highlighting the park's unique beauty and historical significance. This was made using React, Vite, GitHub Pages, PanoRaven, Adobe Premier, and GoPro.";
  let descriptionSSVR = "Virtual Reality game meant to increase environmental and sustainability awareness.  The user walks around and restores local environments to their naturalized states.  Winner at BlossomHack.  Made with Unity, C#, and the Meta Quest 2.";
  let descriptionParkVR = "This project was done in collaboration with Ohio Health to create an Augmented or Virtual reality solution to a problem known as gait freeze which affects a large number of Parkinsons patients.  The application uses a variety of proven techniques, such as audio and visual ques.  This was made using Unity, C#, iPhone AR, Microsoft HoloLens 2, and the Meta Quest 2 Passthrough API.";
  let descriptionRobot = "This project was done in collaboration with THK Manufacturing on a research team comprised of largely graduate students.  The application creates an augmented reality interface for interaction of universal robot arms on a manufacturing line for increased productivity and automation.  Also created a virtual simulation environment to emulate the experience if robot arm is not readily available.  Made using Unity, C#, Microsoft HoloLens 2, Meta Quest 2 Passthrough API.";
  let descriptionReaction = "This project was made during a week in which I had no internet and wished to create a fitness app.  The applications functionality is similar to that of light up walls you might see at an arcade or sports training center where you press the button as it lights up extremely fast.  Made with Unity, C#, and Meta Quest 2.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let drchangliu = <a href = "https://www.ohio.edu/engineering/about/people/liuc" className="blue">, Dr. Chang Liu</a>;
  let ChadMourning = <a href = "https://scholar.google.com/citations?user=qUf84EkAAAAJ&hl=en" className="blue">, Dr. Chad Mourning</a>;
  let WilliamKanieski = <a href = "https://github.com/WilliamKanieski" className="blue">, WilliamKanieski</a>;
  let krerkkiat = <a href = "https://github.com/krerkkiat" className="blue">, krerkkiat</a>;

    return (
        <div>
            <ProjectCard image = {multiTh} link = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization" title = "Utilizing Multithreading for the Iterative Refinement of Antenna Pattern Visualization" description = {descriptionMth} team = {[bp2, ChadMourning]}></ProjectCard>
            <ProjectCard image = {ssVR} link = "https://devpost.com/software/sustainvr" title = "Sustain VR" description = {descriptionSSVR} team = {[bp2, WilliamKanieski]}></ProjectCard>
            <ProjectCard image = {icns} link = "" title = "Quantum Enhanced ADS-B" description = {descriptionICNS} team = {bp2}></ProjectCard>
            <ProjectCard image = {nbody} link = "https://github.com/BP-2/NBody-Simulation" title = "NBody Galaxy Simulation" description = {descriptionNbody} team = {bp2}></ProjectCard>
            <ProjectCard image = {parkVR} link = "https://github.com/BP-2/ParkinsonsApp" title = "Parkinsons VR/AR application with Ohio Health" description = {descriptionParkVR} team = {[bp2, drchangliu]}></ProjectCard>
            <ProjectCard image = {robotAR} link = "https://github.com/BP-2/articulations-robot-demo" title = "AR interface for universal robot controller" description = {descriptionRobot} team = {[bp2, krerkkiat, WilliamKanieski, drchangliu]}></ProjectCard>
            <ProjectCard image = {reactionVR} link = "https://github.com/BP-2/ReactionApp" title = "Fitness VR application" description = {descriptionReaction} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {maca} link = "https://brady-phelps.dev/maca-portfolio/" title = "MACA 360 Photo Gallery Site" description = {descriptionMaca} team = {[bp2]}></ProjectCard>
        </div>

    )
}



export default VRProjects