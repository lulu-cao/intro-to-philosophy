import React from "react";

function GradeCalculator(props) {
  let value;
  switch (props.operator) {
    case "+":
      value = props.num1 + props.num2;
      break;
    case "-":
      value = props.num1 - props.num2;
      break;
    case "*":
      value = props.num1 * props.num2;
      break;
    case "/":
      value = props.num1 / props.num2;
      break;
    default:
      value = NaN;
  }
  return <span>{value}</span>;
}

export default GradeCalculator;
