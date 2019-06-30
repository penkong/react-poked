import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PaletteList from "./PaletteList"; 
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from './helpers/colorHelpers';

/** Simple app that just shows the LightsOut game. */

class App extends Component {

  state = { palette: this.savedPalettes || seedColors };
  savedPalettes = () => {
    JSON.parse(window.localStorage.getItem("palette"));
  }
  findPalette = id => {
    return this.state.palette.find(palette => {
      return palette.id === id;
    })
  }

  savePalette = newPalette => {
    this.setState({ palette : [...this.state.palette, newPalette]}, this.syncLocalStorage);
  }
  syncLocalStorage = () => {
    window.localStorage.setItem("palette", JSON.stringify(this.state.palette));
  }
  // to pass every field in props individually we use ...
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/palette/new" 
          render={(routeProps)=> 
            <NewPaletteForm {...routeProps} palette={this.state.palette} savePalette={this.savePalette} />}
        />
        <Route exact path="/palette/:paletteId/:colorId" 
          render={(routeProps)=> 
            <SingleColorPalette 
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            />
          }
        />
        <Route exact path="/" 
          render={(routeProps)=><PaletteList palettes={this.state.palette} 
            {...routeProps}/>
          }
        />
        <Route exact path="/palette/:id" 
          render={(routeProps)=> 
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
