// import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import { Register1 } from "./Components/register1";
import { Dashboard } from "./Components/Dashboard";
import FAQPage from "./Components/faq";
import About from "./Components/about";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Register1" element={<Register1 />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;