import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup , CSSTransition } from 'react-transition-group';

import PaletteList from "./PaletteList"; 
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

import seedColors from "./seedColors";
import { generatePalette } from './helpers/colorHelpers';


/** Simple app that just shows the LightsOut game. */

class App extends Component {

  state = { palette: this.savedPalettes || seedColors };
  savedPalettes = () => {
    JSON.parse(window.localStorage.getItem("palette"));
  }

  deletePalette = id => {
    this.setState(
      st => ({palette: st.palette.filter(p=> p.id !== id)}),
      this.syncLocalStorage
    )
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
      <Route render={({location})=>(
        
        <TransitionGroup>
          <CSSTransition classNames='page' key={location.key} timeout={500}>
            <Switch location={location}>
              <Route exact path="/palette/new" 
                render={(routeProps)=>(
                  <Page>
                    <NewPaletteForm {...routeProps} palette={this.state.palette} savePalette={this.savePalette} />
                  </Page> 
                )}
              />
              <Route exact path="/palette/:paletteId/:colorId" 
                render={(routeProps)=> (
                  <Page>
                    <SingleColorPalette 
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    />
                  </Page>
                )}
              />
              <Route exact path="/" 
                render={(routeProps)=>(
                  <Page>
                    <PaletteList 
                    deletePalette={this.deletePalette}
                    palettes={this.state.palette} 
                    {...routeProps}/>
                  </Page>
                )}
              />
              <Route exact path="/palette/:id" 
                render={(routeProps)=> (
                  <Page>
                    <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
                  </Page>
                )}
              />
              {/* kind of 404 page */}
              <Route 
                render={(routeProps)=>(
                  <Page>
                    <PaletteList 
                    deletePalette={this.deletePalette}
                    palettes={this.state.palette} 
                    {...routeProps}/>
                  </Page>
                )}
              />
        
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} 
      />
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}

export default App;
