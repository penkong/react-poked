import './PaletteList.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MiniPalette from './ManyPalette';

// import palette from './Palette';
// jss using styled components
// material ui has own internal
class PaletteList extends Component {

  renderPalettes(){
    const { palettes } = this.props;
    
    return palettes.map(palette => (
      <NavLink to={`/palette/${palette.id}`}>
        {palette.paletteName}
      </NavLink>
    ))
  }


  render() {
    return (
      <div>
        <MiniPalette>
          {this.renderPalettes()}
        </MiniPalette>
      </div>
    );
  }
}

export default PaletteList;