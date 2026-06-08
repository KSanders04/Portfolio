import "./header.css";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}files/KyleSandersResume.pdf`;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function downloadFile() {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KyleSandersResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="topContainer">
      <div className="brandContainer">
        <button className="gradientName" type="button" onClick={scrollToTop}>
          Kyle Sanders
        </button>
      </div>

      <button
        className={`hamburgerButton ${isMenuOpen ? "open" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-nav"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="main-nav" className={`menuGroup ${isMenuOpen ? "open" : ""}`}>
        <a href="#aboutMeSection" className="menuTitles" onClick={closeMenu}>
          About
        </a>
        <a href="#languageSection" className="menuTitles" onClick={closeMenu}>
          Languages
        </a>
        <a href="#experienceSection" className="menuTitles" onClick={closeMenu}>
          Experience
        </a>
        <a href="#projectSection" className="menuTitles" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contactFooter" className="menuTitles" onClick={closeMenu}>
          Contact
        </a>

        <div className="resumeContainer mobileResumeContainer">
          <button
            onClick={() => {
              downloadFile();
              closeMenu();
            }}
            className="resumeButton"
          >
            Resume
          </button>
        </div>
      </div>

      <div className="resumeContainer desktopResumeContainer">
        <button onClick={downloadFile} className="resumeButton">
          Resume
        </button>
      </div>
    </div>
  );
};
