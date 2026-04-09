import "./aboutSection.css";
import React from "react";
import kylePhoto from "../assets/photo.png";

export const AboutSection = () => {
  return (
    <section className="sectionContainer" id="aboutMeSection">
      <h2 className="sectionTitle" data-aos="fade-up">
        About Me
      </h2>
      <div className="aboutWrap">
        <div className="aboutContainer" data-aos="fade-up">
          <p>
            I'm a computer science student at Ball State University expecting to
            graduate in May 2026. My main focus is on web and mobile development
            as well as cybersecurity. I not only love making web and mobile apps
            look good but also ones that load fast, are accessible, and writing
            maintainable code.
            <br />
            <br />
            When I am not writing code, I have a huge passion for cars, working
            out, and going on hikes. I am looking for new opportunities to apply
            my skills, grow as a software developer, and work on meaningful,
            impactful projects.
          </p>
          <div className="aboutImageFrame">
            <img src={kylePhoto} alt="Kyle Sanders" />
          </div>
        </div>
      </div>
    </section>
  );
};
