import React from "react";
import Nav from "../Nav.js";

function About() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>About Page</h1>
        <img src="../images/sunflower.jpg" alt="Lulu under sunflower"></img>
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