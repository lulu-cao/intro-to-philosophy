import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";
import "./Home.css";

function Home() {
  return (
    <div>
      <Nav />
      <div id="hero"></div>
      <p>2022</p>
    </div>
  );
}

export default Home;

// fix hero image link
