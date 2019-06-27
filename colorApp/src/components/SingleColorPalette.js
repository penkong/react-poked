import React, { Component } from 'react';
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
        key={color.id} 
        name={color.name} 
        background={color[format]}
        showLink={false}
      />
    ))
    
  }
  render() {
    const { paletteName, emoji } = this.props.palette;
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showAllColors={false}/>
        <div className="Palette-colors">
          {this.renderBoxes()}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default SingleColorPalette;