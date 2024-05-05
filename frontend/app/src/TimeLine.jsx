import { useState } from "react";
import "./TimeLine.scss";
import { Link } from "react-router-dom";
import Deploy from "open-web-ay";
function TimeLine() {
  return (
    <div className="row">
      <div className="main-timeline">
        <h1 className="title-wrap"> History of employment... </h1>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2023</div>
            <h3 className="title">Junior Year</h3>
            <p className="description">To be determined... :)</p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2022 </div>
            <h3 className="title"> Sophomore Year</h3>
            <p className="description">
              <b className="subtitle-two">Fall Semester </b> <br />
              <ul>
                <li>
                  <empty className="subtitle-two">+</empty> Recruited to partake
                  in a fellowship which involved a variety of computational
                  topics to improve{" "}
                  <a
                    className="timeline-links"
                    href="https://ohio-university-ounppm.software.informer.com/"
                  >
                    OUNPPM
                  </a>
                  .
                </li>
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
              </ul>
              <br />
              <b className="subtitle-two"> Spring Semester </b>
              <br />
              <ul>
                <li>
                  <empty className="subtitle-two">+</empty> Continued
                  fellowship.
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
                  <empty className="subtitle-two">+</empty> Began research
                  focused tutorial on Quantum Computing
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
                <li>
                  <empty className="subtitle-two">+</empty> Here is an{" "}
                  <a
                    className="timeline-links"
                    href="https://www.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse"
                  >
                    article
                  </a>{" "}
                  about this semester.{" "}
                </li>
              </ul>
              <br />
              <b className="subtitle-two"> Summer </b>
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
                <li>
                  <empty className="subtitle-two">+</empty> Awarded grant to
                  create fitness watch application (in progress).
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2021</div>
            <h3 className="title">Freshman Year </h3>
            <p>
              <b className="subtitle-three">Fall Semester </b>
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
              <li>
                <empty className="subtitle-three">+</empty> Continued internship
                with Procter & Gamble
              </li>
            </ul>
            <b className="subtitle-three"> Spring Semester </b> <br />
            <ul>
              <li>
                <empty className="subtitle-three">+</empty> Invited onto
                research project working with{" "}
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
                <empty className="subtitle-three">+</empty> Invited onto
                research project in partnership with{" "}
                <a
                  className="timeline-links"
                  href="https://www.thk.com/?q=us/node/5170"
                >
                  THK manufacturing
                </a>
                .{" "}
              </li>
              <li>
                <empty className="subtitle-three">+</empty> Continued internship
                with Procter & Gamble through end of semester
              </li>
            </ul>
            <b className="subtitle-three"> Summer </b>
            <br />
            <ul>
              <li>
                <empty className="subtitle-three">+</empty> Took internship at{" "}
                <a
                  href="https://www.nps.gov/maca/index.htm"
                  className="timeline-links"
                >
                  Mammoth Cave National Park
                </a>{" "}
                under the Science and Resource Management Department for the
                Summer
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
                for accessibility and PR for the park.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-content">
            <div className="timeline-year">2020</div>
            <h3 className="title">High School</h3>
            <b className="subtitle-four">2017-2021</b>
            <br />
            <ul>
              <li>
                <empty className="subtitle-four">+</empty> Began interest in
                coding through tinkering with Ti-84 Calculator
              </li>
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
                <empty className="subtitle-four">+</empty> Began an internship
                with{" "}
                <a className="timeline-links" href="https://us.pg.com/">
                  Procter & Gamble{" "}
                </a>{" "}
                with their OCR Smart Automation team
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
      <Deploy theme="orange"/>

      <span className="spacer"></span>
    </div>
  );
}

export default TimeLine;
