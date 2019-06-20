import "./App.css";
import React, { Component } from "react";
import BoxList from "./BoxList";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BoxList/>
      </div>
    );
  }
}

export default App;
