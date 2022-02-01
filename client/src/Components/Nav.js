import React from "react";
import { Link, useLocation } from "react-router-dom";
import Syllabus from "./pages/Syllabus.pdf";

function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1">
          Intro to Philosophy
        </Link>
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
              <a className="nav-link" href={Syllabus}>
                Syllabus
              </a>
            </li>
            <li className="nav-item dropdown navbar-brand">
              <a
                href="https://mcckc-my.sharepoint.com/:o:/g/personal/lulu_cao_mcckc_edu/Ev17-yXgCZpAiCJJ1wv4NHMBW9FhQ3YN00nRLeH2PZL0ug"
                className="nav-link"
              >
                Handouts
              </a>
            </li>
            <li className="nav-item dropdown navbar-brand">
              <Link
                to="/readings"
                className={
                  location.pathname === "/readings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Readings
              </Link>
            </li>
            <li className="nav-item navbar-brand">
              <Link
                to="/instructor"
                className={
                  location.pathname === "/instructor"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Instructor
              </Link>
            </li>
            {/* <li className="nav-item dropdown navbar-brand">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
