import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";

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
      </div>
    </div>
  );
}

export default Contact;
