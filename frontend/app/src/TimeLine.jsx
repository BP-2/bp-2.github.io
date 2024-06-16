import { useState } from "react";
import "./TimeLine.scss";
import { Link } from "react-router-dom";
import Deploy from "open-web-ay";
import nasa from "./assets/nasa.png";
import uconn from "./assets/uconn.png";
import npLogo from "./assets/npLogo.png";
import pgLogo from "./assets/pgLogo.png";
function TimeLine() {
  return (
    <div className="row">
      <div className="main-timeline">
        <h1 className="title-wrap"> History of cool things... </h1>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2023</div>
            <img src={nasa} alt="NASA Logo" className="nasa-logo" />
            <h3 className="title">Junior Year</h3>
            <b className="subtitle-one">Research Presentations & Papers</b> <br />
            <ul>
              <li>
              <empty>+ Presented {" "}
                  <a
                    className="timeline-links"
                    href="https://arc.aiaa.org/doi/abs/10.2514/6.2024-0163"
                  >
                    multithreaded graphics optimization of antenna patterns
                  </a> at the international  {" "}
                  <a
                    className="timeline-links"
                    href="https://www.aiaa.org/events-learning/event/2024/01/08/default-calendar/2024-aiaa-science-and-technology-forum-and-exposition-%28aiaa-scitech-forum%29?SSO=Y"
                  > AIAA SciTech</a> conference in Orlando Florida, and published my first paper!</empty> 
              </li>
              <li>
              <empty>+ Presented at the international <a className="timeline-links" href="https://ieeexplore.ieee.org/abstract/document/10550471">ICNS</a> conference in Washington D.C. on my work with quantum in aviation security. This paper was also published.</empty>
              </li>
              <li>
              <empty>+ Presented at the AIAA Regional Student Research Competition where my paper took <a className="timeline-links" href="https://www.aiaa.org/news/news/2024/05/07/aiaa-announces-2024-regional-student-conference-winners">2nd place</a> in the overall competition and was published. </empty>
              </li>
              <li>
                <empty>+ Presented additional research at regional conferences such as the Ohio Space Grant Consortium, Choose Ohio First Showcase,  and the Ohio Supercomputer research symposium. </empty>
              </li>
            </ul>
            <b className="subtitle-one">Additional Research Grants & Awards </b> <br />
            <ul>
              <li>
                <empty>+ Awarded grant from the Ohio Space Grant Consortium and NASA for aviation/space research.</empty>
              </li>
              <li>
                <empty>+ Awarded <a href="https://www.ohio.edu/news/2024/05/ohio-students-honored-student-enhancement-awards" className="timeline-links">student enhancement grant</a> for virtual quantum laboratory project.</empty>
              </li>
              <li>
                <empty>+ Accepted fellowship for quantum applications in avionics. </empty>
              </li>
              <li>
                <empty>+ AIAA Digital Avionics Technical Committee Award.</empty>
              </li>
              <li>
                <empty>+ <a className="timeline-links" href="https://www.ohio.edu/news/2024/05/four-ohio-university-students-awarded-prestigious-2024-goldwater-scholarship">Goldwater Scholar</a> recipient.</empty>
              </li>

              <li>
                <empty>+ Winner of BlossomHack 2024 with my <a href="https://www.npmjs.com/package/open-web-ay" className="timeline-links">open-web-ay</a> accessibility package which currently has >2k downloads.</empty>
              </li>
              <li>
                <empty>+ Winner of the Electrical Engineering and Computer Science division at the <a className="timeline-links" href="https://www.ohio.edu/studentexpo">Ohio University Research Expo</a>. </empty>
              </li>


            </ul>
            <b className="subtitle-one">Blasting Off! </b> <br />
            <ul>
            <li>
                <empty>+ Accepted internship at NASA Glenn, working on modelling and simulation for space communications and lunar landings.</empty>
              </li>
            </ul>

          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2022 </div>
            <img src={uconn} className="uconn-logo"></img>
            <h3 className="title"> Sophomore Year</h3>
            <p className="description">
              <b className="subtitle-two">Research </b> <br />
              <ul>
                <li>
                  <empty className="subtitle-two">+</empty> Accepted research fellowship position working on {" "}
                  <a
                    className="timeline-links"
                    href="https://ohio-university-ounppm.software.informer.com/"
                  >
                    OUNPPM
                  </a>
                  .
                </li>
                <li>
                  <empty className="subtitle-two">+</empty> Awarded grant to
                  create fitness HCI application.
                </li>
                <li>
                  <empty className="subtitle-two">+</empty> Got invited to
                  present work at{" "}
                  <a href="https://www.ohiosci.org/" className="timeline-links">
                    {" "}
                    The Ohio Academy of Science{" "}
                  </a>
                  , the{" "}
                  <a
                    href="https://highered.ohio.gov/initiatives/affordability/choose-ohio-first"
                    className="timeline-links"
                  >
                    Choose Ohio First Showcase{" "}
                  </a>
                  , and the{" "}
                  <a
                    href="https://www.ohio.edu/studentexpo"
                    className="timeline-links"
                  >
                    Ohio University Expo
                  </a>
                  .
                </li>

              </ul>
              
              <br />
              <b className="subtitle-two"> Other fun </b>
              <br />
              <ul>
              <li>
                  <empty className="subtitle-two">+</empty> Founded the{" "}
                  <a
                    className="timeline-links"
                    href="https://github.com/ohio-software-development"
                  >
                    Ohio University Software Development Club
                  </a>
                  .
                </li>
                <li>
                  <empty className="subtitle-two">+</empty> Won a couple
                  hackathons{" "}
                  <a
                    className="timeline-links"
                    href="https://devpost.com/software/ou-care"
                  >
                    here
                  </a>{" "}
                  and{" "}
                  <a
                    className="timeline-links"
                    href="https://devpost.com/software/sustainvr"
                  >
                    there
                  </a>
                  .
                </li>

                <li>
                  <empty className="subtitle-two">+</empty>Had an{" "}
                  <a
                    className="timeline-links"
                    href="https://www.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse"
                  >
                    article
                  </a>{" "}
                  on some things from the semester.{" "}
                </li>
              </ul>
              <br />
              <b className="subtitle-two"> Headed to Connecticut </b>
              <br />
              <ul>
                <li>
                  <empty className="subtitle-two">+</empty> Accepted NSF funded
                  REU position on
                  <a
                    className="timeline-links"
                    href="https://khan.engr.uconn.edu/reu_site/"
                  >
                    {" "}
                    Quantum Cryptography at UCONN
                  </a>
                  .
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
          <img src={npLogo} className="nasa-logo"></img>
            <div className="timeline-year">2021</div>
            <h3 className="title">Freshman Year </h3>
            <p>
              <b className="subtitle-three">Scholarship & Education </b>
            </p>
            <ul>
              <li>
                <empty className="subtitle-three">+</empty> Received Full-Ride
                scholarship to Ohio University as a part of both the{" "}
                <a
                  href="https://www.ohio.edu/honors/cutler-scholars"
                  className="timeline-links"
                >
                  Cutler Scholars{" "}
                </a>{" "}
                and Advanced Computing (
                <a
                  className="timeline-links"
                  href="https://www.ohio.edu/honors/tutorial-college"
                >
                  Honors Tutorial College
                </a>
                ) programs.
              </li>
            </ul>
            <b className="subtitle-three"> Research </b> <br />
            <ul>
              <li>
                <empty className="subtitle-three">+</empty> Led project with{" "}
                <a
                  href="https://www.ohiohealth.com/"
                  className="timeline-links"
                >
                  {" "}
                  Ohio Health
                </a>{" "}
                to engineer an Augmented & Virtual Reality application for
                Parkinsons Disease
              </li>
              <li>
                <empty className="subtitle-three">+</empty> Collaborated with{" "}
                <a
                  className="timeline-links"
                  href="https://www.thk.com/?q=us/node/5170"
                >
                  THK manufacturing 
                </a>
                 {" "}on an XR project.
              </li>
            </ul>
            <b className="subtitle-three"> Switching gears </b>
            <br />
            <ul>
              <li>
                <empty className="subtitle-three">+</empty> Left P&G and joined{" "}
                <a
                  href="https://www.nps.gov/maca/index.htm"
                  className="timeline-links"
                >
                  Mammoth Cave National Park
                </a>{" "}
                under the Science and Resource Management Division.
              </li>
              <li>
                <empty className="subtitle-three">+</empty> Awarded grant to
                create{" "}
                <a
                  href="https://brady-phelps.dev/maca-portfolio/"
                  className="timeline-links"
                >
                  Virtual Reality experience{" "}
                </a>
                for park accessibility.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
           <img src={pgLogo} className="uconn-logo"></img>

            <div className="timeline-year">2020</div>
            <h3 className="title">High School</h3>
            <b className="subtitle-four">2017-2021</b>
            <br />
            <ul>
              <li>
                <empty className="subtitle-four">+</empty> Graduated{" "}
                <a
                  href="https://www.dispatch.com/story/news/local/pickerington/2021/04/15/pickerington-schools-names-top-10-students-central-north-classes-2021/7207174002/"
                  className="timeline-links"
                >
                  decem decori{" "}
                </a>
                (top ten) from High School.{" "}
              </li>
              <li>
                <empty className="subtitle-four">+</empty> Joined{" "}
                <a className="timeline-links" href="https://us.pg.com/">
                  Procter & Gamble{" "}
                </a>{" "}
                on their OCR Smart Automation team
              </li>
              <li>
                <empty className="subtitle-four">+</empty> Presented mobile app
                I created to battle drug addiction at the{" "}
                <a href="https://ohiohouse.gov/" className="timeline-links">
                  Ohio State House
                </a>
                .{" "}
              </li>
            </ul>
          </div>
          <br />
          <br />
          <h1 className="title-wrap">
            {" "}
            For more about me, please visit my{" "}
            <Link to={"/contact"}>
              <u>contact page!</u>
            </Link>{" "}
          </h1>
        </div>
      </div>
      <Deploy theme="orange" />

      <span className="spacer"></span>
    </div>
  );
}

export default TimeLine;
