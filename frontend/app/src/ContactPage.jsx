import "./App.scss";
import { Link } from "react-router-dom";
import handleSubmit from "./handleSubmit";
import ContactCard from "./ContactCard";
import { useRef, useState } from "react";
import Deploy from "open-web-ay";
import emailjs from "@emailjs/browser";

// GOOGLE FORM VARIANT: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsLIJMlIf9WwGzlGjz8sEQJnT6oysj8jVDz8XppkYhcjzjKA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

function Contact() {
  const form = useRef();
  const formTwo = useRef();
  const dataRefMessage = useRef();
  const dataRefEmail = useRef();
  const dataRefName = useRef();

  const submithandler = (e) => {
    e.preventDefault();
      try{
      emailjs
        .sendForm(
          "service_97c8c66",
          "template_42ed68m",
          form.current, {
          publicKey:"O_5oHo3Aff8RX-TCf"})
        .then(
          (result) => {
            console.log("SUCCESS");
          },
          (error) => {
            console.log("FAIL");
          }
        );
        alert("Thanks for reaching out!  Your response has been recorded. :)");
      }
      catch{
      alert("An issue has occurred with emailJS. Please reach me directly at bradyDummy@gmail.com.");
      }
  };
  const submithandlerMobile = (e) => {
    e.preventDefault();
      try{
      emailjs
        .sendForm(
          "service_97c8c66",
          "template_42ed68m",
          formTwo.current, {
          publicKey:"O_5oHo3Aff8RX-TCf"})
        .then(
          (result) => {
            console.log("SUCCESS");
          },
          (error) => {
            console.log("FAIL");
          }
        );
        alert("Thanks for reaching out!  Your response has been recorded. :)");
      }
      catch{
      alert("An issue has occurred with emailJS. Please reach me directly at bradyDummy@gmail.com.");
      }
  };

  const setName = (e) => {
    dataRefName.current.value = e.target.value;
  };
  const setMail = (e) => {
    dataRefEmail.current.value = e.target.value;
  };
  const setMessage = (e) => {
    dataRefMessage.current.value = e.target.value;
  };

  return (
    <div>
      <div className="visibledesktop">
        <div className="navbar">
          <Link className="logo" to={"/"}>
            BP
          </Link>
          <Link className="nav-link" to={"/"}>
            {" "}
            Home{" "}
          </Link>

          <Link className="nav-link" to={"/Projects"}>
            {" "}
            Projects{" "}
          </Link>

          <Link className="nav-link" to={"/About"}>
            {" "}
            About{" "}
          </Link>

          <Link className="nav-link" to={"/Contact"}>
            {" "}
            Contact{" "}
          </Link>
        </div>
        <div className="center-form">
          <form ref={form} onSubmit={submithandler}>
            <div className="center-items">
              <p>
                <b>Get in touch!</b>
              </p>
              <br />
              <p>Name: </p>
              <input
                type="text"
                size="40"
                name="user_name"
                onChange={(e) => setName(e)}
              ></input>
              <p>Email: </p>{" "}
              <input
                size="40"
                type="email" 
                name="user_email"
                onChange={(e) => setMail(e)}
              ></input>
              <p>Message: </p>
              <textarea
                rows="5"
                cols="40"
                className="textarea"
                name="message"
                onChange={(e) => setMessage(e)}
              />
              <br />
              <br />
              <button className="send-button" type="submit" value="Send" >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="visibledevice">
        <div className="navbar">
          <Link className="logo" to={"/"}>
            BP
          </Link>
          <Link className="nav-link" to={"/"}>
            {" "}
            Home{" "}
          </Link>

          <Link className="nav-link" to={"/Projects"}>
            {" "}
            Projects{" "}
          </Link>

          <Link className="nav-link" to={"/About"}>
            {" "}
            About{" "}
          </Link>

          <Link className="nav-link" to={"/Contact"}>
            {" "}
            Contact{" "}
          </Link>
        </div>
        <div className="center-form-mobile">
          <form ref={formTwo} onSubmit={submithandlerMobile}>
            <div className="center-items">
              <p>
                <b>Get in touch!</b>
              </p>
              <br />
              <p>Name: </p>
              <input type="text" size="25" name="user_name"
                onChange={(e) => setName(e)}></input>
              <p>Email: </p>{" "}
              <input type="email" size="25" 
                name="user_email"
                onChange={(e) => setMail(e)}></input>
              <p>Message: </p>
              <textarea
                rows="5"
                cols="25"
                className="textarea"
                name="message"
                onChange={(e) => setMessage(e)}
              />
              <br />
              <br />
              <button className="send-button" type="submit" value="Send">
                Send
              </button>
            </div>
          </form>{" "}
        </div>
      </div>
      <Deploy theme="orange" />
    </div>
  );
}

export default Contact;
