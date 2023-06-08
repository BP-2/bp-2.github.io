import "./App.scss";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import handleSubmit from "./handleSubmit";
import { useRef } from "react";

// GOOGLE FORM VARIANT: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsLIJMlIf9WwGzlGjz8sEQJnT6oysj8jVDz8XppkYhcjzjKA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

function Contact() {
  const dataRefMessage = useRef();
  const dataRefEmail = useRef();
  const dataRefName = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(
      dataRefMessage.current.value,
      dataRefName.current.value,
      dataRefEmail.current.value
    );
    dataRefMessage.current.value = "";
    dataRefName.current.value = "";
    dataRefEmail.current.value = "";
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
          <form onSubmit={submithandler}>
            <div className="center-items">
              <p>
                <b>Get in touch!</b>
              </p>
              <br />
              <p>Name: </p>
              <input type="text" size="40" ref={dataRefName}></input>
              <p>Email: </p>{" "}
              <input type="text" size="40" ref={dataRefEmail}></input>
              <p>Message: </p>
              <textarea
                rows="5"
                cols="40"
                className="textarea"
                ref={dataRefMessage}
              />
              <br />
              <br />
              <button className="send-button" type="submit">
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
          <form onSubmit={submithandler}>
            <div className="center-items">
              <p>
                <b>Get in touch!</b>
              </p>
              <br />
              <p>Name: </p>
              <input type="text" size="40" ref={dataRefName}></input>
              <p>Email: </p>{" "}
              <input type="text" size="40" ref={dataRefEmail}></input>
              <p>Message: </p>
              <textarea
                rows="5"
                cols="40"
                className="textarea"
                ref={dataRefMessage}
              />
              <br />
              <br />
              <button className="send-button" type="submit">
                Send
              </button>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
