import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import maca from "./assets/maca-sc.png"
import oucare from "./assets/oucare.png"


function WebProjects() {

  let descriptionMaca = "Awarded grant to develop an immersive 360-degree experience for Mammoth Cave National Park, aimed at promoting accessibility and raising awareness of the park's natural wonders. This project will also serve as a powerful public relations tool, highlighting the park's unique beauty and historical significance. This was made using React, Vite, GitHub Pages, PanoRaven, Adobe Premier, and GoPro.";
  let descriptionOUCare = "Our winning project at Hackpalachia is aimed to bridge the gap between Ohio University students and healthcare resources. We aim to make healthcare more accessible and user-friendly for students.  Made using Yew, Rust, GitHub pages, Python, JavaScript, Twilio, and Azure.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let judeshreffler = <a href = "https://github.com/jude-shreffler" className="blue">, jude-shreffler</a>;
  let GLYurek3 = <a href = "https://github.com/GLYurek3" className="blue">, GLYurek3</a>;
  

    return (
        <div>
            <ProjectCard image = {oucare} link = "https://ohio-software-development.github.io/hackpalachia-project/" title = "OU Care" description = {descriptionOUCare} team ={[bp2, judeshreffler, GLYurek3]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/ou-care">DevPost</a> </p>
            <ProjectCard image = {maca} link = "https://brady-phelps.dev/maca-portfolio/" title = "MACA 360 Photo Gallery Site" description = {descriptionMaca} team = {[bp2]}></ProjectCard>

        </div>

    )
}



export default WebProjects