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
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReadingsCard;
