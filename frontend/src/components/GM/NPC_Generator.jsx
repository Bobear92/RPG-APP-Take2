import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./NPC_Generator.css";

const NPG_Generator = () => {
  const name = ["Krones", "Lier", "Terys", "Raia", "Kali"];
  const race = ["Human", "Elf", "Dwarf", "Hafling", "Gnome", "Orc"];
  const occupation = ["Blacksmith", "Adventurer", "Innkeeper", "Farmer"];
  const emotion = ["Nervous", "Proud", "Timid", "Brave", "Scared", "Excited"];
  const goal = [
    "Everything I do is for the common people.",
    "Something important was taken from me, and I aim to steal it back.",
    "I want to be famous, whatever it takes.",
    "The workshop where I learned my trade is the most important place in the world to me.",
    "I pursue wealth to secure someone's love.",
  ];

  // https://chartopia.d12dev.com/chart/13054/

  const [npc, setNpc] = useState({
    name: "",
    race: "",
    occupation: "",
    emotion: "",
    goal: "",
  });

  const generate = () => {
    setNpc({ name: "", race: "", occupation: "", emotion: "", goal: "" });

    setNpc({
      name: name[Math.floor(Math.random() * name.length)],
      race: race[Math.floor(Math.random() * race.length)],
      occupation: occupation[Math.floor(Math.random() * occupation.length)],
      emotion: emotion[Math.floor(Math.random() * emotion.length)],
      goal: goal[Math.floor(Math.random() * goal.length)],
    });
  };

  //   console.log(buttonToggle);

  const [buttonToggle, setButtonToggle] = useState(false);

  return (
    <div className="npc-generator-main-container">
      <div className="npc-generator-top-container">
        <h2 className="npc-generator-h2">NPC Generator</h2>
      </div>

      <div className="npc-generator-button-container">
        <button
          className="npc-generator-button"
          onClick={() => {
            setButtonToggle(true);
            generate();
          }}
        >
          Generate an NPC
        </button>
      </div>

      <div className="npc-generator-npc-container">
        <p>Name: {npc.name}</p>
        <p>Race: {npc.race}</p>
        <p>Occupation: {npc.occupation}</p>
        <p>Emotion: {npc.emotion}</p>
        <p>Goal: {npc.goal}</p>
      </div>
    </div>
  );
};

export default NPG_Generator;
