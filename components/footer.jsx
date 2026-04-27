import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contactFooter">
      <div className="footer">
        <h3 className="contact">Contact</h3>

        <p className="contactLinks">
          <a href="mailto:kasanders2004@gmail.com">Email</a> |{" "}
          <a href="tel:+19376817402">Phone Number</a> |{" "}
          <a href="/files/KyleSandersResume.pdf" download>
            Resume
          </a>
        </p>

        <div className="socialLinks" aria-label="Social links">
          <a
            className="socialLink"
            href="https://github.com/KSanders04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={28} />
          </a>
          <a
            className="socialLink"
            href="https://www.linkedin.com/in/kylesanders04/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <p className="copyright">© 2026 Kyle Sanders</p>
      </div>
    </footer>
  );
};
