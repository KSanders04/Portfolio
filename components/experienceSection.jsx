import React from "react";
import "./experienceSection.css";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Consultation Agent",
      company: "Geek Squad",
      date: "Oct 2024 - Present",
      bullets: [
        "Provided technical support for a variety of electronics, including computers, smartphones, and home entertainment systems, diagnosing hardware and software issues and helping resolve them efficiently.",
        "Explained technical problems and solutions in a clear and simple way, assisting customers with troubleshooting, device setup, and repairs to ensure a smooth experience.",
        "Managed repair requests and documentation, worked with technicians to track progress, and recommended products or services based on customer needs.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Ball State University",
      date: "May 2025 - Aug 2025",
      bullets: [
        " Designed and built a live sports prediction mobile app with React Native, Typescript, and Firebase, featuring multiple game modes and various leaderboards.",
        " Worked in a 4-person team, participating in code reviews, planning, and developing through GitHub workflows.",
        "Scaled real-time data updates to support 100+ concurrent users per game with sub-second latency.",
      ],
    },
  ];

  return (
    <section className="sectionContainer" id="experienceSection">
      <h2 className="sectionTitle" data-aos="fade-up">
        Experience
      </h2>
      <div className="newContainer">
        <ul className="experienceTimeline">
          {experiences.map((experience, index) => (
            <li
              className="experienceItem"
              key={`${experience.role}-${index}`}
              data-aos="fade-up"
            >
              <div className="experienceContainer">
                <div className="experienceHeader">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                </div>
                <h4 style={{ marginBottom: 15 }}>{experience.date}</h4>
                <ul className="experienceBullets">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <li
                      className="bulletList"
                      key={`${experience.role}-bullet-${bulletIndex}`}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
