import "./Css/dashboard.css";
import AccountMenu from "./accountmenu";
import Mycard from "./card";
import { Navbar } from "./nav";
export const Dashboard = (props) => {

    return (
    <div>
         <div className="navbar">  
        <Navbar />
        <AccountMenu />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    <h2>LET'S START INVESTING</h2>
        <Mycard/>
    </div>
    )
};