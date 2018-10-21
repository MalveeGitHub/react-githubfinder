import React, { Component } from "react";
import "./App.css";
import GithubFinder from "./components/GithubFinder";

class App extends Component {
  render() {
    return (
      <div className="container">
        <GithubFinder />
      </div>
    );
  }
}

export default App;
