import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./accountmenu";
import "./Css/nav.css";
import { CurrencyBtc, UserPlus } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nrow">
      <div className="ncol1">
      <CurrencyBtc size={32} />
      </div>
      <div className="ncol2">
      <h1 className="nh1">Money Heist</h1>
      </div>
      <div className="ncol">
        <Link to="/Register"><UserPlus size={32} /></Link>
      </div>
      <div className="ncol3">
      <AccountMenu />
      </div>
      </div>
    </div>
  );
};