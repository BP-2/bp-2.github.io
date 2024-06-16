import ProjectCard from "./ProjectCard";
import "./App.scss";
import "./Projects.scss";
import maca from "./assets/maca-sc.png"
import oucare from "./assets/oucare.png"
import oway from "./assets/oway.png"
import softwareDev from "./assets/softwareDev.png"
import rmd from "./assets/rmd.png"
import cp from "./assets/cp.png"
import cc from "./assets/coachConnect.png"
import lma from "./assets/lma.png"
function WebProjects() {

  let descriptionLMA = "Online store for small and local businesses in Athens, Ohio. Designed to compete with Amazon and Walmart, and give power to small business.";
  let descriptionCC = "Created website to connect student athletes with youth to provide athletic training.";
  let descriptionCP = "Constructed website for a small startup who is looking to sell custom drum pads.";
  let descriptionRMD = "Website created to make the college selection process simpler by creating a platform for users to discuss and share living situations. This project won an entrepreneurship competition at Ohio University.";
  let descriptionSD = "Website constructed for the Ohio University Software Development Club. This site is built using React."
  let descriptionOWAY = "Project created at BlossomHack 2024 to spread web accessibility to underrepresented portions of the internet. It won \"Best Hack\" and \"Best DEI Hack\". It currently has around 2,000 downloads and is live on the NPM registry.";
  let descriptionMaca = "Awarded grant to develop an immersive 360-degree experience for Mammoth Cave National Park, aimed at promoting accessibility and raising awareness of the park's natural wonders. This project will also serve as a powerful public relations tool, highlighting the park's unique beauty and historical significance. This was made using React, Vite, GitHub Pages, PanoRaven, Adobe Premier, and GoPro.";
  let descriptionOUCare = "Our winning project at Hackpalachia is aimed to bridge the gap between Ohio University students and healthcare resources. We aim to make healthcare more accessible and user-friendly for students.  Made using Yew, Rust, GitHub pages, Python, JavaScript, Twilio, and Azure.";
  let bp2 = <a href = "https://github.com/BP-2" className="blue">BP-2</a>;
  let judeshreffler = <a href = "https://github.com/jude-shreffler" className="blue">, jude-shreffler</a>;
  let GLYurek3 = <a href = "https://github.com/GLYurek3" className="blue">, GLYurek3</a>;
  

    return (
        <div>
            <ProjectCard image = {softwareDev} link ="https://ohio-software-development.github.io/" title ="OUSDC Website" description={descriptionSD} team={bp2}></ProjectCard>
            <ProjectCard image = {oway} link = "https://www.npmjs.com/package/open-web-ay" title="Open Web AY" description={descriptionOWAY} team={bp2}></ProjectCard>
            <ProjectCard image = {lma} link = "https://github.com/ohio-software-development/LocalMarket/tree/brady" title="Local Market" description={descriptionLMA} team={bp2}></ProjectCard>
            <ProjectCard image = {rmd} link = "https://brady-phelps.dev/rate-my-dorm" title = "Rate My Dorm" description={descriptionRMD} team={bp2}></ProjectCard>
            <ProjectCard image = {cc} link = "https://brady-phelps.dev/coach-connect/#/" title = "Coach Connect" description={descriptionCC} team={bp2}></ProjectCard>
            <ProjectCard image = {cp} link ="https://brady-phelps.dev/drum-eco/" title = "Constellation Percussion" description={descriptionCP} team={bp2}></ProjectCard>
            <ProjectCard image = {oucare} link = "https://ohio-software-development.github.io/hackpalachia-project/" title = "OU Care" description = {descriptionOUCare} team ={[bp2, judeshreffler, GLYurek3]}></ProjectCard>
            <p className="project-description"><a className="blue" href = "https://devpost.com/software/ou-care">DevPost</a> </p>
            <ProjectCard image = {maca} link = "https://brady-phelps.dev/maca-portfolio/" title = "MACA 360 Photo Gallery Site" description = {descriptionMaca} team = {[bp2]}></ProjectCard>

        </div>

    )
}



export default WebProjects