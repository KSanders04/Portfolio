import React from "react";
import "./projectSection.css";
import portfolioPhoto from "../../assets/portfolioPicture.png";

export const PersonalPortfolio = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={portfolioPhoto} alt="Portfolio" />
      <div className="projectDescrContainer">
        <h3>Personal Portfolio</h3>
        <p className="description">
          A modern portfolio website built with React and Vite to showcase my
          projects, technical skills, and experience.
        </p>
        <li>Showcases multiple projects with details and source code links</li>
        <li>Highlights my technical skills, languages, and tools</li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">React</p>
          <p className="usedLang">Vite</p>
          <p className="usedLang">CSS3</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Portfolio">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
