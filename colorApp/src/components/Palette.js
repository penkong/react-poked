
import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

class palette extends Component {

  state = {level: 500};

  changeLevel = level => this.setState({level});
  
  renderBox(){
    return this.props.palette.colors[this.state.level].map(color => (
        <ColorBox background={color.hex} name={color.name}/>
      ) 
    )
  }
  
  render() {
    return (
      <div className="Palette">
        <Navbar level={this.state.level} changeLevel={this.changeLevel}/>
        <div className="Palette-colors">
          {this.renderBox()}
        </div>
      </div>
    );
  }
}

export default palette;