import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header } from "./Main";

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
