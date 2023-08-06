import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-name">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-main">
        <div className="contact-item-1">
          <div className="contact-input-box">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="contact-textarea">
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="contact-submit">
            <button type="button">SUBMIT</button>
          </div>
        </div>
        <div className="contact-item-2">
          <div className="c-i-2-cont">
            <div className="c-i-2-item">
              <div className="co-i-box">
                <TfiEmail className="contact-icon" />
              </div>

              <p>info@divirental.com</p>
            </div>
            <div className="c-i-2-item">
              <div className="co-i-box">
                <TfiEmail className="contact-icon" />
              </div>

              <p>info@divirental.com</p>
            </div>
            <div className="c-i-2-item">
              <div className="co-i-box">
                <TfiEmail className="contact-icon" />
              </div>

              <p>info@divirental.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
