import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Home from "./Components/pages/Home";
import Instructor from "./Components/pages/Instructor";
import Readings from "./Components/pages/Readings";
import Contact from "./Components/pages/Contact";

// function App() {
//   return (
//     // this is the syntax for react-router-dom version 6
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/instructor" element={<Instructor />} />
//           <Route path="/readings" element={<Readings />} />
//           <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App;



