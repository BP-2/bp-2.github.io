import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import multiTh from "./assets/brady-poster2.png"
import parkVR from "./assets/parkVR.png"
import robotAR from "./assets/robotAR.png"
import nodes from "./assets/Nodes.png"


function ResearchProjects() {

  let descriptionMth = "Abstract: The Ohio University Navaid Performance Prediction Model is a globally used tool for the certification of navigational aid compliance and safety at airports. The main purpose of OUNPPM is to calculate multipath interference from structures close to the navigational aid equipment and provide corresponding error plots. Initially, OUNPPM created a single, fixed-precision ideal antenna pattern; this computation would halt the program until calculation completed which could take upwards of 30 seconds.  This research aims to increase productivity and interactivity by reducing jitter in the 3D accelerated context and implement dynamic rendering practices within the scope of OUNPPM.  This stands to benefit a variety of private, public, and military airports across the world.  Completed under the Choose Ohio First Grant.  Made using C++, multithreading, OpenGL, Cmake, and OUNPPM.";
  let descriptionParkVR = "This project was done in collaboration with Ohio Health to create an Augmented or Virtual reality solution to a problem known as gait freeze which affects a large number of Parkinsons patients.  The application uses a variety of proven techniques, such as audio and visual ques.  This was made using Unity, C#, iPhone AR, Microsoft HoloLens 2, and the Meta Quest 2 Passthrough API.";
  let descriptionRobot = "This project was done in collaboration with THK Manufacturing on a research team comprised of largely graduate students.  The application creates an augmented reality interface for interaction of universal robot arms on a manufacturing line for increased productivity and automation.  Also created a virtual simulation environment to emulate the experience if robot arm is not readily available.  Made using Unity, C#, Microsoft HoloLens 2, Meta Quest 2 Passthrough API.";
  let descriptionNodes = "Abstract: With the rise of Quantum Computing, modern secu- rity protocols are at risk of being breached by advanced quantum algorithms. While classical communication methods may not suf- fice to address this challenge, Quantum Key Distribution (QKD) presents a promising solution. QKD systems are designed to facilitate the secure transmission of cryptographic keys between two parties, typically referred to as Alice and Bob. These parties are connected by a public classical and quantum channels. An important aspect to consider when implementing QKD protocols is the amount of noise in a system of nodes. Quantum noise refers to the inherent uncertainties and fluctuations that arise during the processing and transmission of quantum information. In recent quantum network solutions, one model sees the use of trusted nodes acting as communication hubs between two parties. This model has proven to allow for longer distance QKD exchange than previously accomplished, however, it still has its flaws. Recently, a new solution has been proposed. This solution, known as Simplified Trusted Nodes, deallocates much of the computational complexity from the trusted nodes and instead places it on the users interacting with the node. This method brings promises of enhanced security and the possibility to traverse larger distances with the nodal systems. In this research the authors aim to derive and prove the simplified trusted node framework. Along with this, the paper will cover the creation of equations for general noise calculations in quantum networks and a simulation for prototyping and testing noise in quantum networks"
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let ChadMourning = <a href = "https://scholar.google.com/citations?user=qUf84EkAAAAJ&hl=en" className="blue">, Dr. Chad Mourning</a>;
  let drchangliu = <a href = "https://www.ohio.edu/engineering/about/people/liuc" className="blue">, Dr. Chang Liu</a>;
  let WilliamKanieski = <a href = "https://github.com/WilliamKanieski" className="blue">, WilliamKanieski</a>;
  let krerkkiat = <a href = "https://github.com/krerkkiat" className="blue">, krerkkiat</a>;
  let ShyraLaGarde = <a href = "https://github.com/ShyraLaGarde" className="blue">, ShyraLaGarde</a>;
  let WalterKrawec = <a href = "http://www.walterkrawec.org/" className="blue">, Prof. Walter Krawec</a>;
  
  return (
        <div>
            <ProjectCard image = {multiTh} link = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization" title = "Utilizing Multithreading for the Iterative Refinement of Antenna Pattern Visualization" description = {descriptionMth} team = {[bp2, ChadMourning]}></ProjectCard>
            <p className="project-description">Presented at: <a className="blue" href = "https://news.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse">The Ohio State House</a> and <a className="blue" href = "https://projectboard.world/oas-annual-meeting/project/utilizing-parallelism-and-multithreading-for-iterative-refinement-of-antenna-pattern-visualization">The Ohio Academy of Science</a></p>
            <p className="project-description">To be presented at <a className="blue" href = "https://osgc.org/">NASA</a> and <a className="blue" href = "https://www.aiaa.org/SciTech">AIAA SciTech</a></p>
            <br/>
            <ProjectCard image = {nodes} title = "Proving Simplified Trusted Nodes" description = {descriptionNodes} team = {[bp2, ShyraLaGarde, WalterKrawec]}></ProjectCard>
            <ProjectCard image = {parkVR} link = "https://github.com/BP-2/ParkinsonsApp" title = "Parkinsons VR/AR application with Ohio Health" description = {descriptionParkVR} team = {[bp2, drchangliu]}></ProjectCard>
            <ProjectCard image = {robotAR} link = "https://github.com/BP-2/articulations-robot-demo" title = "AR interface for universal robot controller" description = {descriptionRobot} team = {[bp2, krerkkiat, WilliamKanieski, drchangliu]}></ProjectCard>

            <br/>
        </div>

    )
}



export default ResearchProjects