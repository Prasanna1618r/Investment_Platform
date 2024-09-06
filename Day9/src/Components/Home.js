import React from "react";
import guyImg from "../Images/invest-img.jpg";
import "./Css/home.css";
import { Navbar } from "./nav.js";
import { Footer } from "./footer.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Login');
  };
  return (
    <div>
      <Navbar/>
    <div className="hrow">
      <div className="hcol1">
        <img src={guyImg} alt="back" className="hi1" />
      </div>
      <div className="hcol2">
        <h1 className="hh1"><span>Invest</span> Your Money To Save It!</h1>
        <button className="hb1" onClick={handleClick}>Get Started</button>
      </div>
    </div>
    
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default Home;