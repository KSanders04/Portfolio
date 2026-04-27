import "./languagesSection.css";
import React from "react";
import reactLogo from "../src/assets/images/ReactLogo.png";
import javaLogo from "../src/assets/images/javaLogo.png";
import javascriptLogo from "../src/assets/images/javascriptLogo.png";
import nodejsLogo from "../src/assets/images/nodejsLogo.png";
import pythonLogo from "../src/assets/images/pythonLogo.png";
import cLogo from "../src/assets/images/cLogo.png";
import css3Logo from "../src/assets/images/css3Logo.png";
import html5Logo from "../src/assets/images/HTML5Logo.png";
import sqlLogo from "../src/assets/images/SQLLogo.png";
import typescriptLogo from "../src/assets/images/TypescriptLogo.png";
import firebaseLogo from "../src/assets/images/FirebaseLogo.png";
import mongodbLogo from "../src/assets/images/mongodbLogo.svg";
import mysqlLogo from "../src/assets/images/mysqlLogo.png";
import vueLogo from "../src/assets/images/vueLogo.png";
import gitLogo from "../assets/gitLogo.png";
import jestLogo from "../assets/jestLogo.png";
import linuxLogo from "../assets/linuxLogo.png";
import androidStudioLogo from "../assets/androidStudioLogo.png";
import figmaLogo from "../assets/figmaLogo.svg";

export const LanguagesSection = () => {
  const technicalSkills = [
    {
      image: javascriptLogo,
      alt: "JavaScript",
    },
    {
      image: typescriptLogo,
      alt: "TypeScript",
    },
    {
      image: pythonLogo,
      alt: "Python",
    },
    {
      image: javaLogo,
      alt: "Java",
    },
    {
      image: cLogo,
      alt: "C",
    },
    {
      image: sqlLogo,
      alt: "SQL",
    },
  ];
  const frontendSkills = [
    {
      image: html5Logo,
      alt: "HTML5",
    },
    {
      image: css3Logo,
      alt: "CSS3",
    },
    {
      image: reactLogo,
      alt: "React",
    },
    {
      image: vueLogo,
      alt: "Vue",
    },
  ];

  return (
    <section className="sectionContainer" id="languageSection">
      <h2 className="sectionTitle" data-aos="fade-up">
        Technical Skills
      </h2>

      <div className="wrap">
        <div className="skillContainer" data-aos="fade-up">
          <h3>Languages</h3>
          <div className="frontEndGrid">
            {technicalSkills.map((technicalSkill) => (
              <img
                className="programmingImg"
                src={technicalSkill.image}
                alt={technicalSkill.alt}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 50,
          }}
        >
          <div className="skillContainer" data-aos="fade-up">
            <h3>Frontend</h3>
            <div className="frontEndGrid">
              {frontendSkills.map((frontendSkill) => (
                <img
                  className="programmingImg"
                  src={frontendSkill.image}
                  alt={frontendSkill.alt}
                />
              ))}
            </div>
          </div>

          <div className="skillContainer" data-aos="fade-up">
            <h3>Backend</h3>
            <div className="frontEndGrid">
              <img className="programmingImg" src={nodejsLogo} alt="Node.js" />
              <img
                className="programmingImg"
                src={firebaseLogo}
                alt="Firebase"
              />
              <img className="programmingImg" src={mongodbLogo} alt="MongoDB" />{" "}
              <img className="programmingImg" src={mysqlLogo} alt="mySQL" />
            </div>
          </div>
        </div>

        <div className="skillContainer" data-aos="fade-up">
          <h3>Tools & Testing</h3>
          <div className="frontEndGrid">
            <img className="programmingImg" src={gitLogo} alt="Git" />
            <img className="programmingImg" src={jestLogo} alt="Jest" />
            <img className="programmingImg" src={linuxLogo} alt="Linux" />
            <img
              className="programmingImg"
              src={androidStudioLogo}
              alt="Android Studio"
            />
            <img className="programmingImg" src={figmaLogo} alt="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
};
