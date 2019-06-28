import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {

  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: "hex"};
  }

  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeFormat = val => this.setState({format: val});

  renderBoxes(){
    const { format } = this.state;
    return this._shades.map(color => (
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]}
        showLink={false}
      />
    ))
    
  }
  render() {
    const { paletteName, emoji,id } = this.props.palette;
    return (
      // this is inside color box.css
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showAllColors={false}/>
        <div className="Palette-colors">
          {this.renderBoxes()}
          <div className="go-back ColorBox">
          <Link className="back-button" to={`/palette/${id}`}>go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    ); 
    // 
  }
}

export default SingleColorPalette;