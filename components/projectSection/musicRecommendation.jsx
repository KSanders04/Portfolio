import React from "react";
import "./projectSection.css";
import musicRecommendation from "../../src/assets/images/musicRecommendation.png";

export const MusicRecommendation = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={musicRecommendation} alt="Music Recommendation" />
      <div className="projectDescrContainer">
        <h3>VibeFinder</h3>
        <p className="description">
          A Java Swing application that recommends five artists and five songs
          for a selected genre.
        </p>
        <li>
          Choose whether to view artists, songs, or both after selecting a
          genre.
        </li>
        <li>
          Users can save songs and replay them in their personalized playlist.
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">Java</p>
          <p className="usedLang">Java Swing</p>
          <p className="usedLang">Jamendo API</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Music-Recommendation">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
