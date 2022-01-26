import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";

function Home() {
  return (
    <div>
      <Nav />
      <img src="https://afremov.com/images/product/image_2632.jpeg" alt="hero" style={{width: "100%", height: "75rem"}}></img>
    </div>
  );
}

export default Home;

//https://reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper
//check out react animations at the bottom of the page

// follow react tutorial and use the starter codes