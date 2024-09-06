import "./Css/dashboard.css";
// import AccountMenu from "./accountmenu";
import Mycard from "./card";
import { Navbar } from "./nav";
import { useSelector } from "react-redux";
export const Dashboard = (props) => {

    const {user}=useSelector((state)=>state.master);

    return (
    <div>  
        <Navbar />
        <center><h2>Hi {user} </h2></center>
        <Mycard/>
    </div>
    )
};