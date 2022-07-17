import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Home, Footer } from "./Main";
import { NPC_Generator, Biomes } from "./GM";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          {/* // */}
          {/* Main Routes */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* // */}
          {/* GM Routes */}
          <Route path="/npc-generator">
            <NPC_Generator />
          </Route>
          <Route path="/biomes">
            <Biomes />
          </Route>
          {/* // */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
