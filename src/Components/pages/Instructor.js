import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";
import Painting from "../images/painting.jpg";

function About() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>About Page</h1>
        <img src={Painting} alt="Lulu painting" style={{width:"40rem", height:"100%"}}></img>
        <p>
          Instructor: Lulu Cao<br/>
          M.A. Philosophy, Western Michigan University, 2021<br/>
          Currently teaching at Metropolitan Community College, Kansas City, MO
        </p>
      </div>
    </div>
  );
}

export default About;