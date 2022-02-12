import React from "react";
import "./style.css";

function ReadingsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Year:</strong> {props.year}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeReadings(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ReadingsCard;
