// import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


import { Register1 } from "./Components/register1";
import { Dashboard } from "./Components/Dashboard";
import FAQPage from "./Components/faq";
import About from "./Components/about";
// import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Ppf from "./Components/ppf";
import Profile from "./Components/profile";
import FeedForm from "./Components/Feed";
import { Privacy } from "./Components/privacy";
import ContactUs from "./Components/Contact";
// import Feedback from "./Components/Feed";
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ppf" element={<Ppf />} />
          <Route path="/nsc" element={<Ppf />} />
          <Route path="/postoffice" element={<Ppf />} />
          <Route path="/govtbonds" element={<Ppf />} />
          <Route path="/nps" element={<Ppf />} />
          <Route path="/sgb" element={<Ppf />} />
          <Route path="/ulip" element={<Ppf />} />
          <Route path="/equity" element={<Ppf />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<FeedForm/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;