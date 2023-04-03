import { useState } from "react";
import "./TimeLine.scss";
import { Link } from "react-router-dom";

function TimeLine() {
  return (
  <div className="row">

  <div className="main-timeline">
  <h1 className="title-wrap"> History of employment... </h1>
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-year">2023</div>
        <h3 className="title">Junior Year</h3>
        <p className="description">
          To be determined... :)
        </p>
      </div>
    </div>
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-year">2022 </div>
        <h3 className="title"> Sophomore Year</h3>
        <p className="description">
        <b className="subtitle-two">Summer & Fall Semester </b> <br/>
        Joined internship at <a href = "https://www.nps.gov/maca/index.htm" className = "timeline-links">Mammoth Cave National Park</a>.
         Also awarded grant to create a Virtual Reality experience for accessibility and PR for the park, earned Outstanding Volunteer award from the United States Department of Interior,
        and continued work on both prior research projects. Once Fall semester started up,
        I was recruited to partake in a fellowship which involved a variety of computational topics to improve <a className = "timeline-links" href = "https://ohio-university-ounppm.software.informer.com/">OUNPPM</a>.
        I also started the <a className = "timeline-links" href = "https://github.com/ohio-software-development">Ohio University Software Development Club</a>.
        <br/>
        <b className="subtitle-two"> Spring Semester </b><br/>
        Continued fellowship program. Gained an interest in Hackathons and won at both <a className = "timeline-links" href ="https://devpost.com/software/ou-care">here</a> and <a className = "timeline-links" href ="https://devpost.com/software/sustainvr">here</a>. Began a research focused tutorial on Quantum Computing. Got invited to present work at <a href = "https://www.ohiosci.org/" className = "timeline-links"> The Ohio Academy of Science </a>, the <a href = "https://highered.ohio.gov/initiatives/affordability/choose-ohio-first" className = "timeline-links">Choose Ohio First Showcase </a>, and the <a href = "https://www.ohio.edu/studentexpo" className = "timeline-links">Ohio University Expo</a>.
        Also got my own <a className = "timeline-links" href ="https://www.ohio.edu/news/2023/03/ohios-choose-ohio-first-scholars-present-ohio-statehouse"><b>article</b></a>.
        <br/>
        <b>Still in progress :) </b>
        </p>
      </div>
    </div>
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-year">2021</div>
        <h3 className="title">Freshman Year </h3>
        <p><b className="subtitle-three">Summer & Fall Semester </b></p>
        <p className="description">
          Graduated decem decori (top ten) from High School and began an internship with <a className = "timeline-links" href = "https://us.pg.com/" >Procter & Gamble </a> as with their OCR Smart Automation team while enrolling with a full-ride 
          scholarship to Ohio University as a part of both the <a href = "https://www.ohio.edu/honors/cutler-scholars" className = "timeline-links">Cutler Scholars </a> and Advanced Computing (<a className = "timeline-links" href = "https://www.ohio.edu/honors/tutorial-college">Honors Tutorial College</a>) programs.
          The internship ran through the summer, and I was brought on throughout the school year.
        </p>
        <p>
        <b className="subtitle-three"> Spring Semester </b> <br/>
        Invited onto research project working with <a href = "https://www.ohiohealth.com/" className="timeline-links"> Ohio Health</a> to engineer an Augmented & Virtual Reality application to assist those struggling with locomotive skills due to 
        degenerative brain disorders. Also recruited to create an Augmented Reality application in partnership with <a className = "timeline-links" href = "https://www.thk.com/?q=us/node/5170">THK manufacturing</a>. Continued internship with Procter & Gamble.
        </p>
      </div>
    </div>
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-year">2020</div>
        <h3 className="title">High School</h3>
        <b className="subtitle-four">2017-2021</b><br/>
        <p className="description">
          Interest in Computer Science originated when I exercised curiosity in programming calculators to do math problems for myself and friends. 
          Completed a variety of cool projects, including a mobile application to battle addiction that I presented at the <a href = "https://ohiohouse.gov/" className = "timeline-links">Ohio State House</a>.
        </p>
      </div>
      <br/>
      <br/>
      <h1 className="title-wrap"> For more about me, please visit my <Link to={"/contact"}><u>contact page!</u></Link> </h1>
      

    </div>
  </div>

  
  <span className = "spacer"></span>
</div>
  );
}

export default TimeLine;
