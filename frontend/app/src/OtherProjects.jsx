import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import smTui from "./assets/smTui.png"

function OtherProjects() {

  let descriptionSM = "This project brings the social media experience to the terminal. Users can create profiles, make friends, and engage with a variety of content by liking or disliking posts. With the ability to edit their own profile images and descriptions, users can easily express their unique personalities and connect with others who share their interests. This project also features an intuitive profile browsing feature, allowing users to explore a diverse range of profiles and discover new connections.  Made using Rust, Cursive, and the image library.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let judeshreffler = <a href = "https://github.com/jude-shreffler" className="blue">, jude-shreffler</a>;
  
    return (
        <div>
            <ProjectCard image = {smTui} link = "https://github.com/ohio-software-development/SocialMediaHackathonTui" title = "Social Media TUI" description = {descriptionSM} team = {[bp2, judeshreffler]}></ProjectCard>
        </div>

    )
}


export default OtherProjects