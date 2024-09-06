// import { Link } from "react-router-dom";
import "./Css/footer.css";
export const Footer = (props) => {
    return (
        <footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact US</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' alt="" width={40} height={40}style={{borderRadius:50}}></img></a>
                <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} alt="" style={{borderRadius:50}}></img></a>
                <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' alt="" width={40} height={40} style={{borderRadius:50}}></img></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
};
