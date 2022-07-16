import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Home, Footer } from "./Main";
import { NPC_Generator } from "./GM";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/npc-generator">
            <NPC_Generator />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
