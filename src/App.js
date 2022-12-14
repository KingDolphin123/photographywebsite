import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Contact from "./Components/Contact";

import "./Css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function Rr() {
  window.location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0');
  return null;
}
function Happy() {
  window.location.replace('https://youtu.be/S_gnnnAEcso?t=19');
  return null;
}
function Seal() {
  window.location.replace('https://www.youtube.com/watch?v=GJDNkVDGM_s');
  return null;
}
function App() {
  return (
    <Router>
      <div className = "setmax">
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/amogus" element={<Rr />} />
          <Route exact path="/parrot" element={<Happy />} />
          <Route exact path="/happy" element={<Seal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
