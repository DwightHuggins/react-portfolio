import React from "react";
import "./styles/Contact.css";

const ContactButtons = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="col-12 col-md-6">
          <div className="row">
            <h1 id="contacttext">Contact</h1>
          </div>

          <div className="row contact">
            <a
              href="https://github.com/dwighthuggins"
              className="btn btn-outline-dark"
            >
              GitHub
            </a>
          </div>
          <br></br>
          <div className="row contact">
            <a
              href="www.linkedin.com/in/dwight-huggins-76aa51122"
              className="btn btn-outline-dark"
            >
              LinkedIn
            </a>
          </div>
          <br></br>
          <div className="row contact">
            <a
              href="mailto:dwight_huggins@icloud.com"
              className="btn btn-outline-dark"
            >
              Email
            </a>
          </div>
          <br></br>
          <div className="row contact">
            <a href="tel:404-290-9168" className="btn btn-outline-dark">
              Phone: 404-290-9168
            </a>
          </div>
          <br></br>

          <div className="row contact">
            <a
              href= {Pdf}
              target= "_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Resume
            </a>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;