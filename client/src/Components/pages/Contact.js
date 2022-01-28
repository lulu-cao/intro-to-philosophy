import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";

function About() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Email</h1>
        <p>
          Lulu.Cao@mcckc.edu
        </p>
      </div>
    </div>
  );
}

export default About;