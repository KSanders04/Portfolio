import React from "react";
import "./projectSection.css";
import zombieLandHome from "../../src/assets/images/zombieLandHome.png";

export const ZombieLand = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={zombieLandHome} alt="Zombie Land" />
      <div className="projectDescrContainer">
        <h3>Zombie Land</h3>
        <p className="description">
          A Python application that lets players play a top-down shooter where
          they try to shoot as many zombies as possible.
        </p>
        <li>Scoring feature showing the player's kill count.</li>
        <li>Reloading feature with limited ammo before needing to reload.</li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">Python</p>
          <p className="usedLang">Pygame</p>
          <p className="usedLang">SimpleGE</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Zombie-Land-Game">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
