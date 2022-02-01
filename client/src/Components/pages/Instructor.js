import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";
import Painting from "../images/painting.jpg";

function Instructor() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Instructor</h1>
        <img
          src={Painting}
          alt="Lulu painting"
          style={{ width: "40rem", height: "100%" }}
        ></img>
        <p>
          <strong>Lulu Cao</strong>
          <br />
          Public Philosopher
          <br />
          M.A. Philosophy, Western Michigan University, 2021
          <br />
          Adjunct Faculty, Metropolitan Community College, KCMO
        </p>
        <p>
          Email:&nbsp;
          <a href={`mailto:Lulu.Cao@mcckc.edu`}>Lulu.Cao@mcckc.edu</a>
        </p>
      </div>
    </div>
  );
}

export default Instructor;
