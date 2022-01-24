import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";
import Sunflower from "../images/sunflower.jpg";

function About() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>About Page</h1>
        <img src={Sunflower} alt="Lulu under sunflower" style={{width:"18rem", height:"25rem"}}></img>
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