import React, { Component } from "react";
import "./App.css";
import GithubFinder from "./components/GithubFinder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repo from "./components/Repo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={GithubFinder} />
            <Route exact path="/repo/:username" component={Repo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
