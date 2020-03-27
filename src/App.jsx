import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Nav from "./components/nav/nav.jsx";
import "./style.css";

const App = () => (
  <Router>
    <Switch>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/nav" component={Nav} />
      </div>
    </Switch>
  </Router>
);
export default App;
