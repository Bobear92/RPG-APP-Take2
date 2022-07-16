import React, { useState, useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [userSelect, setUserSelect] = "";

  function buttonSelect() {
    switch (userSelect) {
      case "characterSheet":
        console.log("worked");
        return (
          <div className="header-sub-button-links">
            <NavLink className="nav-button" to="/sheet">
              Character Sheet
            </NavLink>
            <NavLink className="nav-button" to="/class">
              Class
            </NavLink>
            <NavLink className="nav-button" to="/sub-class">
              Sub Class
            </NavLink>
            <NavLink className="nav-button" to="/feats">
              Feats
            </NavLink>
            <NavLink className="nav-button" to="/spell-list">
              Spell List
            </NavLink>
            <NavLink className="nav-button" to="/spell-book">
              Spell Book
            </NavLink>
          </div>
        );
        break;
      default:
        return null;
    }
  }

  return (
    <header>
      <h1>Welcome to the Header Component</h1>
      <NavLink className="nav-button" to="/">
        Home
      </NavLink>
      <button onClick={setUserSelect("characterSheet") && buttonSelect}>
        Character Sheet
      </button>
    </header>
  );
};

export default Header;
