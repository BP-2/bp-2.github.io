import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import simons from "./assets/simons.png"
import teleport from "./assets/teleport.png"
import march from "./assets/march.png"
import nodes from "./assets/Nodes.png"
import exchange from "./assets/exchange.png"
import icns from "./assets/snoopWithTool.png"


function QuantumProjects() {

  let descriptionICNS = "Presented protocol on quantum key distribution to secure ADS-B at ICNS. The protocol explored quantum applications within aviation, and also implored a simulation to communicate effectiveness of protocol."
  let descriptionSimons = "This program uses the popular quantum algorithm Simons Algorithm to create an interactable program that users can input a bitstring into and see the algorithm create a circuit that computes the 2-1 pairs given the input bitstring.  This allows those learning quantum computing to see an example in which they can interact with.  Made using Python and Qiskit.";
  let descriptionTeleport = "This program performs quantum teleportation in a way which engages the user.  It asks for an origin bit, target bit, and a value to teleport.  It will then run the circuit and display the results to the terminal.  This allows those learning quantum computing to see an example in which they can interact with.  Made with Python and Qiskit.";
  let descriptionMarch = "This program uses the quantum hadamard gate and basic laws of probability to create march madness brackets using historical probabilities to guide the bracket.  Made using Python and Qiskit.";
  let descriptionNodes = "Abstract: With the rise of Quantum Computing, modern secu- rity protocols are at risk of being breached by advanced quantum algorithms. While classical communication methods may not suf- fice to address this challenge, Quantum Key Distribution (QKD) presents a promising solution. QKD systems are designed to facilitate the secure transmission of cryptographic keys between two parties, typically referred to as Alice and Bob. These parties are connected by a public classical and quantum channels. An important aspect to consider when implementing QKD protocols is the amount of noise in a system of nodes. Quantum noise refers to the inherent uncertainties and fluctuations that arise during the processing and transmission of quantum information. In recent quantum network solutions, one model sees the use of trusted nodes acting as communication hubs between two parties. This model has proven to allow for longer distance QKD exchange than previously accomplished, however, it still has its flaws. Recently, a new solution has been proposed. This solution, known as Simplified Trusted Nodes, deallocates much of the computational complexity from the trusted nodes and instead places it on the users interacting with the node. This method brings promises of enhanced security and the possibility to traverse larger distances with the nodal systems. In this research the authors aim to derive and prove the simplified trusted node framework. Along with this, the paper will cover the creation of equations for general noise calculations in quantum networks and a simulation for prototyping and testing noise in quantum networks";
  let descriptionNetwork = "Series of simulations constructed to predict affects of noise in linear and parallel quantum networks. Also simulations included to model key exchange handoffs and the affect of noise in a variety of protocols (primarily entanglement based BB84). Some of included simulations were done to experimentally prove the loss of ciphertext in failed key handoffs.  ";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let ShyraLaGarde = <a href = "https://github.com/ShyraLaGarde" className="blue">, ShyraLaGarde</a>;
  let WalterKrawec = <a href = "http://www.walterkrawec.org/" className="blue">, Prof. Walter Krawec</a>;
    return (
        <div>
            <ProjectCard image = {nodes} title = "Proving Simplified Trusted Nodes" description = {descriptionNodes} team = {[bp2, ShyraLaGarde, WalterKrawec]}></ProjectCard>
            <ProjectCard image = {exchange} title = "Quantum Network Simulations" description = {descriptionNetwork} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {icns} link = "" title = "Quantum Enhanced ADS-B" description = {descriptionICNS} team = {bp2}></ProjectCard>
            <ProjectCard image = {simons} link = "https://github.com/BP-2/SimonsAlgorithm" title = "Interactive Simons Algorithm program" description = {descriptionSimons} team = {[bp2]}></ProjectCard>
            <ProjectCard image = {teleport} link = "https://github.com/BP-2/QuantumTeleportation" title = "Quantum Teleportation program" description = {descriptionTeleport} team = {[bp2]}></ProjectCard> 
            <ProjectCard image = {march} link = "https://github.com/BP-2/Quantum-March-Madness" title = "Quantum March Madness" description = {descriptionMarch} team = {[bp2]}></ProjectCard> 
        </div>

    )
}



export default QuantumProjects