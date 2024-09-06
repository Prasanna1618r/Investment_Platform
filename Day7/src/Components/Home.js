// import { Link } from "react-router-dom";
import "./Css/home.css";
import { Footer } from "./footer";
import { Navbar } from "./nav";
export const Home = (props) => {
    return (
        <div className="home">
        <div className="navbar">
          <Navbar />
      </div>
      <footer>
        <Footer />
      </footer>
      </div>
        
    )
};
