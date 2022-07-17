import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // dummy data
  const campaign_name1 = "Yaara"; // will be the name of the campaign based off of who is the GM
  const campaign_name2 = "Dragon's Folly";

  const nameArray = [campaign_name1, campaign_name2];
  const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];

  const locations_object1 = {
    name: "Abandoned Church",
    picture:
      "https://i.pinimg.com/originals/39/67/4e/39674ef09857915436af999be4b1a0f1.jpg",
    description:
      "The old abandoned church where a dark cult is rumored to practice its dark magic.",
  }; // random object from the settings or location table to display on home page. Change with every refresh. https://www.geeksforgeeks.org/sql-select-random/

  const locations_object2 = {
    name: "Old Mine",
    picture:
      "https://cdnb.artstation.com/p/assets/images/images/000/691/085/large/daniel-conway-caves-da.jpg?1430867351",
    description:
      "The old mine was once a place where great wealth was made until the miner's started disappearing.",
  };
  const locationArray = [locations_object1, locations_object2];
  const randomLocation =
    locationArray[Math.floor(Math.random() * locationArray.length)];

  const random_npc1 = {
    name: "Feanor",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/039/898/550/medium/bx-moon-art-studio-e-elder-autumn-eladrin.jpg?1627285364",
    description: "The once leader of the desert elves.",
  };
  const random_npc2 = {
    name: "Amalda",
    picture:
      "https://cdnb.artstation.com/p/assets/images/images/035/890/573/large/clara-fang-1.jpg?1616166842",
    description: "The once leader of the Wood elves.",
  };
  const randomNpcArray = [random_npc1, random_npc2];
  const randomNpc =
    randomNpcArray[Math.floor(Math.random() * randomNpcArray.length)];

  return (
    <div className="home-main-container">
      <div className="home-top-container">Welcome to {randomName}</div>
      <div className="home-random-content-container">
        <div className="home-left-container">
          <p className="home-left-container-name">{randomLocation.name}</p>
          <img
            className="home-left-container-picture"
            src={randomLocation.picture}
          />
          <p className="home-left-container-description">
            {randomLocation.description}
          </p>
        </div>
        <div className="home-right-container">
          <p className="home-right-container-name">{randomNpc.name}</p>
          <img
            className="home-right-container-picture"
            src={randomNpc.picture}
          />
          <p className="home-right-container-description">
            {randomNpc.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
