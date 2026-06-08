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
            I graduated from Ball State University in May 2026 with a degree in
            Computer Science. My primary areas of focus are web development,
            mobile development, and cybersecurity. I enjoy building applications
            that are not only visually appealing but also fast, accessible, and
            maintainable. I am passionate about creating high-quality software
            that delivers a great user experience while following modern
            development best practices.
            <br />
            <br />
            When I am not writing code, I have a huge passion for cars, working
            out, and going golfing. I am looking for new opportunities to apply
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
