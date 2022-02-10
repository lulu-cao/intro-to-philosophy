import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {props.faculties.map((faculty) => (
        <li className="list-group-item" key={faculty.id}>
          {`${faculty.name + ", " + faculty.status + ", " + faculty.campus}`}
        </li>
      ))}
    </ul>
  );
}

export default List;
