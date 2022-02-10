import React from "react";
import Nav from "../Nav.js";
import GradeCalculator from "./GradeCalculator/GradeCalculator.js";

function Grade(props) {
  return (
    <div>
      <Nav />
      <div className="container">
        <p>
          Quiz: <GradeCalculator num1={2.5} operator="+" num2={1} />
        </p>
        <p>
          Attendance: <GradeCalculator num1={1.9} operator="*" num2={2} />
        </p>
      </div>
    </div>
  );
}

export default Grade;
