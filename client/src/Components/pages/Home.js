import React from "react";
import Nav from "../Nav.js";
import "../styles/Home.css";

function Home() {
  return (
    <div className="center">
      <Nav />
      {/* <img
        src="https://jooinn.com/images/peace-in-nature-1.jpg"
        alt="hero"
        style={{ width: "100%", height: "45rem" }}
      ></img> */}
      <div
        style={{
          backgroundImage: `url("https://jooinn.com/images/peace-in-nature-1.jpg")`,
        }}
        className="hero"
      >
        Hello Philosophy
      </div>
    </div>
  );
}

export default Home;

//https://reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper
//check out react animations at the bottom of the page

// follow react tutorial and use the starter codes
//https://reactjs.org/tutorial/tutorial.html

//finished 13
