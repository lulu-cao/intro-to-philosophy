import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/pages/Home";
import Instructor from "./Components/pages/Instructor";
import Readings from "./Components/pages/Readings";
import Handouts from "./Components/pages/Handouts";
import Contact from "./Components/pages/Contact";
import Grade from "./Components/pages/Grade";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/handouts" element={<Handouts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grade" element={<Grade />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// ReactDOM.render(
//   // <React.StrictMode>
//     <App />,
//   // </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
