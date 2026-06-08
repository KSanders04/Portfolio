import "./projectSection.css";
import React from "react";
import { FoodInventoryProject } from "./foodInventoryProject";
import { MusicRecommendation } from "./musicRecommendation";
import { ZombieLand } from "./zombieLand";
import { PersonalPortfolio } from "./personalPortfolio";

export const ProjectSection = () => {
  return (
    <section className="sectionContainer" id="projectSection">
      <h2 className="sectionTitle" data-aos="fade-up">
        Featured Projects
      </h2>

      <div className="projectGrid">
        <FoodInventoryProject />

        <MusicRecommendation />

        <ZombieLand />

        <PersonalPortfolio />
      </div>
    </section>
  );
};
