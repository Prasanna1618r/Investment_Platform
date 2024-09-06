import React from "react";
import { Link } from "react-router-dom";
// import { House} from "phosphor-react";
import "./Css/nav.css";
import { AddressBook, CurrencyBtc, SignIn, UserPlus } from "phosphor-react";
// import { Home } from "@material-ui/icons";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="cur">
      <CurrencyBtc size={32} />
      {/* <h3>Money Heist</h3> */}
      </div>
      <div className="links">
        <Link to="/contact"><AddressBook size={32} /></Link>
        <Link to="/Login"><SignIn size={32} /></Link>
        <Link to="/Register"><UserPlus size={32} /></Link>
      </div>
    </div>
  );
};