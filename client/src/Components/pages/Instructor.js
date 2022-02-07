import React from "react";
import Nav from "../Nav.js";
import Painting from "../images/painting.jpg";

const styles = {
  heading: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
  },
};

function Instructor() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1 style={styles.heading}>Instructor</h1>
        <img
          src={Painting}
          alt="Lulu painting"
          style={{ width: "40rem", height: "100%" }}
        ></img>
        <p>
          <span style={styles.name}>Lulu Cao</span>
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
