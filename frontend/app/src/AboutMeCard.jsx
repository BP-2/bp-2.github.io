import "./AboutMe.scss";

function AboutMeCard() {
  return (
    <div className="screen">
    <div className="container">
      <div className="card-three">
       <h1 className = "computer-text">User: <b className="comp-link">Brady Phelps </b></h1>
       <h2 className = "computer-text">Year: <b className="comp-link">Rising Junior</b></h2>
       <h2 className = "computer-text">Major: <b className="comp-link">Advanced Computing </b></h2>
       <h2 className = "computer-text">College: <b className="comp-link">Ohio University </b></h2>
       <h2 className = "computer-text">Social Media: <a className = "comp-link" href="https://www.linkedin.com/in/brady-phelps-54a374215/"><u>LinkedIn</u></a> <a className = "comp-link" href="https://github.com/BP-2"><u>GitHub</u></a> <a className = "comp-link" href = "mailto: info@brady-phelps.dv"><u>Email</u></a></h2>
      </div>
    </div>
    <div className="screen-bottom"></div>
    </div>
  );
}

export default AboutMeCard;
