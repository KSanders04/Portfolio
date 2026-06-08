import React from "react";
import "./projectSection.css";
import foodHomePage from "../../src/assets/images/homePage.png";

export const FoodInventoryProject = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={foodHomePage} alt="Food Inventory System" />
      <div className="projectDescrContainer">
        <h3>ShelfIQ</h3>
        <p className="description">
          A web-based platform that enables food service staff to efficiently
          track in-stock and out-of-stock items.
        </p>
        <li>
          Add and categorize food items based on the restaurant’s current
          offerings
        </li>
        <li>
          Provides a customer-facing display that shows which foods are
          currently unavailable
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">React</p>
          <p className="usedLang">JavaScript</p>
          <p className="usedLang">MongoDB</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Boars-Head-Food-Inventory">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
