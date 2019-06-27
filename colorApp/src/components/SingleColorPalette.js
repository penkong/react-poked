import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {

  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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

  renderBoxes(){
    return this._shades.map(color => (
      <ColorBox 
        key={color.id} 
        name={color.name} 
        background={color.hex}
        showLink={false}
      />
    ))
    
  }
  render() {

    return (
      <div className="Palette">
        <div className="Palette-colors">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;