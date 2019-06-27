import "./App.css";

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PaletteList from "./PaletteList"; 
import Palette from "./Palette";
import seedColors from "./seedColors";

import { generatePalette } from './helpers/colorHelpers';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  findPalette(id){
    return seedColors.find(palette => {
      return palette.id === id;
    })
  }
  // to pass every field in props individually we use ...
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={()=><PaletteList palettes={seedColors}/>}/>
        <Route exact path="/palette/:id" render={(routeProps)=> 
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
          }
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}

export default App;
