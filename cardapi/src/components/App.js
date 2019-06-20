import "./App.css";
import React, { Component } from "react";
import Deck from "./Deck";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Deck/>
      </div>
    );
  }
}

export default App;
