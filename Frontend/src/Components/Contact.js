// ContactUs.js
import React from 'react';
import './Css/Contact.css';
import { Navbar } from "./nav";
import { Footer } from "./footer";

const ContactUs = () => {

  const handleSubmit = () => {
    alert("Successfully Submitted");
  }

  return (
    <div>
      <Navbar/>
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Reach out to us using the contact form below, and our team will be happy to
        assist you.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='cl1' htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label className='cl1' htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label className='cl1' htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" >Submit</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@investmentplatform.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Investment Street, City, Country</p>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
};

export default ContactUs;