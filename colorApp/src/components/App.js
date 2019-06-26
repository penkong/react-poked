import "./App.css";

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import seedColors from "./seedColors";


/** Simple app that just shows the LightsOut game. */

class App extends Component {
  // to pass every field in props individually we use ...
  render() {
    return (
      <div>
        <Palette {...seedColors[4]}/>
      </div>
    );
  }
}

export default App;
