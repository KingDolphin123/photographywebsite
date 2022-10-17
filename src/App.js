import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Footer from "./Components/Footer";
import "./Css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/packages" element={<Packages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
