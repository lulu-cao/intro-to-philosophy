import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="#">
          Intro to Philosophy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item navbar-brand">
              <a
                className="nav-link active"
                aria-current="page"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item navbar-brand">
              <a className="nav-link" href="../../files/syllabus.pdf">
                Syllabus
              </a>
            </li>
            <li className="nav-item navbar-brand">
              <a className="nav-link" href="./assets/html/assignment.html">
                Assignments
              </a>
            </li>
            <li className="nav-item dropdown navbar-brand">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study Tools
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="./assets/html/library_of_congress.html"
                  >
                    Library of Congress
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./assets/html/youtube.html"
                  >
                    Recommended YouTube Channels
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./assets/html/day_planner.html"
                  >
                    Day Planner
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
