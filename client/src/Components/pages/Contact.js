import React from "react";
import Nav from "../Nav.js";
import "../styles/Contact.css";

function Contact({ email, subject, body, ...props }) {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Email</h1>
        <p>
          <a
            href={`mailto:Lulu.Cao@mcckc.edu?subject=${subject || ""}&body=${
              body || ""
            }`}
          >
            Email
          </a>
        </p>
        <p className="tag">Subject</p>
        <p className="tag">Your Name</p>
        <p className="tag">Contact Reason</p>
        <p className="tag">Message</p>
      </div>
    </div>
  );
}

export default Contact;
