import React from "react";
import "./Css/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
        />
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    <div className="c4">
        <h1>Contact Us</h1>
    <div className="contact">
      <form className="f1" onSubmit={handleSubmit}>
        <label className="c1" htmlFor="email">Email:</label>
        <input className="c2"
          id="email"
          type="email"
          name="email"
          required
          placeholder="@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" enabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
          This is a prototype website made as a project by Prasannakumar&nbsp;
          <a href="https://instagram.com/_prasanna.16_?igshid=MmIzYWVlNDQ5Yg==">
            @_.prasanna.16_
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Contact;