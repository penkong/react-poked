import "./App.css";
import React, { Component } from "react";
import JokeList from "./JokeList";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <JokeList/>
      </div>
    );
  }
}

export default App;
