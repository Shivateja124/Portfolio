import React from "react";
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div>
       <footer className="footer">
        <div className="footer-contact">
          <p className="section-title">Contact Me</p>
          <p className="footer-text">
            <img className="footer-icon" src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" alt="gmail" />
            Email: <a href="mailto:elijalashivateja@gmail.com" className="footer-link">elijalashivateja@gmail.com</a>
          </p>
          <p className="footer-text">
            <img className="footer-icon" src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png" alt="linkedin" />
            LinkedIn: <a href="https://www.linkedin.com/in/shiva-teja-elijala-9b7904268/" target="_blank" rel="noopener noreferrer" className="footer-link">linkedin.com/in/shiva-teja-elijala</a>
          </p>
          <p className="footer-text">
            <img className="footer-icon" src="https://clipground.com/images/phone-call-logo-png-9.png" alt="phone" />
            Phone: +91-6300806754
          </p>
        <div className="footer-download">
          <a href="/Shivateja_Resume.pdf" download className="download-link">
            <button className="resume-button">Download Resume</button>
          </a>
        </div>
        </div>

        <div className="labels">
            <input type="text" name="name" id="name" placeholder="Your Name"/>
            <input type="email" name="email" id="email" placeholder="Your email"/>
            <textarea  rows="4" cols="50" placeholder="Your Message"></textarea>

            <submit className="submit">Submit</submit>
        </div>

      </footer> 

      <p className="footer-bottom">
        &copy; All Rights are Reserved by Shivateja
      </p>
    </div>
  );
}
