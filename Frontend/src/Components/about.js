import React from "react";
import "./Css/about.css";
import { Navbar } from "./nav";

function About() {
  return (
    <div>
      <Navbar />
    <div className="about">
      <h1>About Us</h1>
     <p> Welcome to our investment website! We are dedicated to providing you with the knowledge, tools, and resources you need to make informed investment decisions. Our platform is designed to empower investors of all levels, from beginners to experienced professionals, to navigate the complex world of finance and achieve their financial goals.</p>
<br />
<p>At Money Heist, we understand that investing can be both exciting and daunting. That's why we strive to create a user-friendly and intuitive platform that offers a wide range of investment opportunities to suit various investment styles and preferences. Whether you are interested in stocks, bonds, mutual funds, ETFs, or alternative investments, we've got you covered.</p>
<br/>
<p>Our team of experts is committed to conducting thorough research and analysis to identify promising investment opportunities across different markets and sectors. We aim to present you with comprehensive and up-to-date information, empowering you to make informed decisions based on your own investment objectives and risk tolerance.</p>
<br/>
<p>Transparency and trust are at the core of our values. We believe in fostering long-term relationships with our clients, built on integrity and reliability. We prioritize providing clear and accurate information about the investments we offer, along with transparent fee structures, ensuring that you have a complete understanding of the potential risks and rewards associated with each investment option.</p>
<br/>
<p>Education is a fundamental aspect of successful investing. We provide a wealth of educational resources, including articles, guides, tutorials, and webinars, to help you enhance your financial literacy and develop a deeper understanding of investment strategies. Our aim is to empower you with the knowledge and confidence needed to make sound investment decisions.</p>
<br/>
<p>Customer satisfaction is our top priority. Our dedicated support team is available to assist you with any questions or concerns you may have along your investment journey. We value your feedback and continuously strive to improve our services based on your needs and suggestions.</p>
<br/>
<p>Thank you for choosing Money Heist as your investment partner. We are excited to accompany you on your investment journey and help you unlock the potential of the financial markets. Start exploring our platform today and take control of your financial future!</p>
      <br />

      <h3>Browse through some videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/embeded/bd2YlYE2DFY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/embeded/eVu99Mr45H8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/embeded/-PkN15TtFnc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/embeded/9_a0zYox_Rk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default About;