import './PaletteList.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import palette from './Palette';

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
        {this.renderPalettes()}
      </div>
    );
  }
}

export default PaletteList;