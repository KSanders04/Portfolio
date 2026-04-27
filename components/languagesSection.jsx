import "./languagesSection.css";
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

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skillContainer" data-aos="fade-up">
      <h3>{title}</h3>
      <div className="frontEndGrid">
        {skills.map(({ image, alt }) => (
          <img key={alt} className="programmingImg" src={image} alt={alt} />
        ))}
      </div>
    </div>
  );
};

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
  const backendSkills = [
    {
      image: nodejsLogo,
      alt: "Node.js",
    },
    {
      image: firebaseLogo,
      alt: "Firebase",
    },
    {
      image: mongodbLogo,
      alt: "MongoDB",
    },
    {
      image: mysqlLogo,
      alt: "MySQL",
    },
  ];
  const tools = [
    {
      image: gitLogo,
      alt: "Git",
    },
    {
      image: jestLogo,
      alt: "Jest",
    },
    {
      image: linuxLogo,
      alt: "Linux",
    },
    {
      image: androidStudioLogo,
      alt: "Android Studio",
    },
    {
      image: figmaLogo,
      alt: "Figma",
    },
  ];

  return (
    <section className="sectionContainer" id="languageSection">
      <h2 className="sectionTitle" data-aos="fade-up">
        Technical Skills
      </h2>

      <div className="wrap">
        <SkillCard title="Languages" skills={technicalSkills} />

        <div className="dualSkillRow">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
        </div>

        <SkillCard title="Tools & Testing" skills={tools} />
      </div>
    </section>
  );
};
