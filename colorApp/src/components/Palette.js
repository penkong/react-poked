
import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class palette extends Component {

  state = {level: 500 , format: "hex"};

  changeLevel = level => this.setState({level});
  changeFormat = val => this.setState({format: val});
  
  renderNavBar(){
    return (
      <Navbar 
        level={this.state.level} 
        changeLevel={this.changeLevel}
        handleChange={this.changeFormat}
        showAllColors
      />
    )
  }
  
  renderBoxes(){
    const { level, format } = this.state;
    return this.props.palette.colors[level].map(color => (
        <ColorBox 
          key={color.id} 
          background={color[format]} 
          name={color.name}
          moreUrl={`/palette/${this.props.palette.id}/${color.id}`}
          showFullPalette={true}
        />
      ) 
    )
  }
  
  renderFooter(){
    const { paletteName, emoji } = this.props.palette;
    return (
      // <footer className="Palette-footer">
      //   {this.props.palette.paletteName}
      //   <span className="emoji">{this.props.palette.emoji}</span>
      // </footer>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    )
  }
  
  render() {
    return (
      <div className="Palette">
        {this.renderNavBar()}
        <div className="Palette-colors">
          {this.renderBoxes()}
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}

export default palette;