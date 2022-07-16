import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // dummy data
  const campaign_name = "Yaara"; // will be the name of the campaign based off of who is the GM
  const locations_object = {
    name: "Abandoned Church",
    picture:
      "https://i.pinimg.com/originals/39/67/4e/39674ef09857915436af999be4b1a0f1.jpg",
    description:
      "The old abandoned church where a dark cult is rumored to practice its dark magic.",
  }; // random object from the settings or location table to display on home page. Change with every refresh. https://www.geeksforgeeks.org/sql-select-random/

  const random_npc = {
    name: "Feanor",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/039/898/550/medium/bx-moon-art-studio-e-elder-autumn-eladrin.jpg?1627285364",
    description: "The once leader of the desert elves.",
  };

  return (
    <div className="home-main-container">
      <div className="home-top-container">Welcome to {campaign_name}</div>
      <div className="home-random-content-container">
      <div className="home-left-container">
        <p className="home-left-container-name">{locations_object.name}</p>
        <img
          className="home-left-container-picture"
          src={locations_object.picture}
        />
        <p className="home-left-container-description">
          {locations_object.description}
        </p>
      </div>
      <div className="home-right-container">
        <p className="home-right-container-name">{random_npc.name}</p>
        <img
          className="home-right-container-picture"
          src={random_npc.picture}
        />
        <p className="home-right-container-description">
          {random_npc.description}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
