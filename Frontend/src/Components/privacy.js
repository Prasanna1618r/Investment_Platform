import React from "react";
import './Css/privacy.css';
import { Navbar } from "./nav";
import { Footer } from "./footer";

export const Privacy = () => {
  return (
    <div className="container">
        <div className="m">
            <Navbar />
      <center><h1 className="f">Terms & Conditions</h1></center><br /><br />

      <p className="h">
      At Money Heist, we are committed to safeguarding the privacy and security of our users' personal information. When you use our investment platform, we may collect certain personal data, such as your name, email address, phone number, and financial information, to facilitate account registration, investment transactions, and provide personalized investment recommendations. We may also collect data automatically through cookies and similar tracking technologies to enhance your user experience. The information collected is used for the purpose of providing our investment services, ensuring platform security, and improving our offerings.<br/>
<br/>
We do not sell or rent your personal information to third parties for marketing purposes. However, we may share your data with trusted partners, including financial institutions and service providers, to deliver seamless investment experiences and comply with legal requirements. Our platform maintains appropriate security measures to protect your data from unauthorized access, disclosure, or alteration.<br/>
<br/>
You have the right to access, modify, or delete your personal information stored on our platform. If you wish to exercise these rights or have any questions about our privacy practices, please contact us . By using our investment platform, you acknowledge and consent to the collection, processing, and sharing of your personal data as described in this privacy policy. Any updates to our privacy policy will be communicated to you through our website or other appropriate channels."<br />
<br/>
Please note that this is a general template, and you should tailor the paragraph to accurately reflect your specific investment platform's data practices and comply with relevant data protection laws in your jurisdiction. It's always a good idea to have a legal professional review your privacy policy to ensure its compliance and effectiveness.</p><br /><br />
    </div>
    <footer>
        <Footer/>
    </footer>
    </div>
  )
};