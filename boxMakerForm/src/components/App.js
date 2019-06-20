import "./App.css";
import React, { Component } from "react";
import Box from "./Box";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Box/>
      </div>
    );
  }
}

export default App;
