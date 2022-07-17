import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-main-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/npc-generator"> NPC Generator</NavLink>
      <NavLink to="/biomes"> Biomes</NavLink>
    </header>
  );
};

export default Header;
