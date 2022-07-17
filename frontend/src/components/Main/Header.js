import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [homeToggle, setHomeToggle] = useState(true);
  const [gmToggle, setGmToggle] = useState(false);
  console.log(homeToggle);

  return (
    <>
      {homeToggle ? (
        <>
          <div className="header-main-container">
            <NavLink
              className="header-nav-button"
              to="/"
              onClick={() => {
                setGmToggle(false);
                setHomeToggle(true);
              }}
            >
              Home
            </NavLink>

            <NavLink
              className="header-nav-button"
              to="/"
              onClick={() => {
                setHomeToggle(false);
                setGmToggle(true);
              }}
            >
              GM
            </NavLink>
          </div>
        </>
      ) : gmToggle ? (
        <>
          <div className="header-main-container">
            <NavLink
              className="header-nav-button"
              to="/"
              onClick={() => {
                setGmToggle(false);
                setHomeToggle(true);
              }}
            >
              Home
            </NavLink>

            <NavLink className="header-nav-button" to="/npc-generator">
              {" "}
              NPC Generator
            </NavLink>
            <NavLink className="header-nav-button" to="/biomes">
              {" "}
              Biomes
            </NavLink>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Header;
