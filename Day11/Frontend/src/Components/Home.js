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
        <h1 className="hh1"><span>Invest</span> Your Money For Future Use!</h1>
        <center><h4>Investing is the process of buying assets that increase in value over time and provide returns in the form of income payments or capital gains.
          In a larger sense, investing can also be about spending time or money to improve your own life or the lives of others.
          But in the world of finance, investing is the purchase of securities, real estate and other items of value in the pursuit of capital gains or income.</h4></center>
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