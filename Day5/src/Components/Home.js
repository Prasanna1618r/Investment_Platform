// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
export const Home = (props) => {
    return (
         <div className="navbar">
      <div className="links">
        <h1 className="h">Home</h1>
        <h1 className="h1">UPGRADE</h1>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </div>
    </div>
    )
};