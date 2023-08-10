import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import simons from "./assets/simons.png"
import teleport from "./assets/teleport.png"
import march from "./assets/march.png"

function QuantumProjects() {

  let descriptionSimons = "This program uses the popular quantum algorithm Simons Algorithm to create an interactable program that users can input a bitstring into and see the algorithm create a circuit that computes the 2-1 pairs given the input bitstring.  This allows those learning quantum computing to see an example in which they can interact with.  Made using Python and Qiskit.";
  let descriptionTeleport = "This program performs quantum teleportation in a way which engages the user.  It asks for an origin bit, target bit, and a value to teleport.  It will then run the circuit and display the results to the terminal.  This allows those learning quantum computing to see an example in which they can interact with.  Made with Python and Qiskit.";
  let descriptionMarch = "This program uses the quantum hadamard gate and basic laws of probability to create march madness brackets using historical probabilities to guide the bracket.  Made using Python and Qiskit.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
    return (
        <div>
            <ProjectCard image = {simons} link = "https://github.com/BP-2/SimonsAlgorithm" title = "Interactive Simons Algorithm program" description = {descriptionSimons} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {teleport} link = "https://github.com/BP-2/QuantumTeleportation" title = "Quantum Teleportation program" description = {descriptionTeleport} team = {[bp2]}></ProjectCard> 
            <ProjectCard image = {march} link = "https://github.com/BP-2/Quantum-March-Madness" title = "Quantum March Madness" description = {descriptionMarch} team = {[bp2]}></ProjectCard>
            
        </div>

    )
}



export default QuantumProjects