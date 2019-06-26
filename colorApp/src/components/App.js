import "./App.css";

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import seedColors from "./seedColors";

import { generatePalette } from './helpers/colorHelpers';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  // to pass every field in props individually we use ...
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[4]}/>
      </div>
    );
  }
}

export default App;
