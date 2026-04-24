import "./footer.css";
import React from "react";

export const Footer = () => {
  return (
    <footer id="contactFooter">
      <div className="footer">
        <h3 className="contact">Contact</h3>

        <p>
          <a href="mailto:kasanders2004@gmail.com">Email</a> |{" "}
          <a href="tel:+19376817402">Phone Number</a>
        </p>

        <p>
          <a href="https://github.com/KSanders04" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/kylesanders04/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="/files/KyleSandersResume.pdf" download>
            Resume
          </a>
        </p>

        <p>© 2026 Kyle Sanders</p>
      </div>
    </footer>
  );
};
