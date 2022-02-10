import React from "react";
import Nav from "../Nav.js";
import "../styles/Contact.css";
import List from "./List/List.js";

const faculty = [
  {
    id: 1,
    name: "Brandon Gillette",
    status: "Full-time Faculty",
    campus: "MCC - Blue River",
  },
  {
    id: 2,
    name: "Douglas Fishel",
    status: "Full-time Faculty",
    campus: "MCC - Maple Woods",
  },
  {
    id: 3,
    name: "Michael Connelly",
    status: "Full-time Faculty",
    campus: "MCC - Longview",
  },
];

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
        <List faculties={faculty} />
      </div>
    </div>
  );
}

export default Contact;
