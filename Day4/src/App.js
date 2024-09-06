// import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import Dashboard from "./Components/dash";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;