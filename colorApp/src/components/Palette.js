
import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

class palette extends Component {

  state = {level: 500 , format: 'hex'};

  changeFormat = val => {
    this.setState({format: val});
  }

  changeLevel = level => this.setState({level});
  
  renderBox(){
    const { level, format } = this.state;
    return this.props.palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name}/>
      ) 
    )
  }
  
  render() {
    return (
      <div className="Palette">
        <Navbar 
          level={this.state.level} 
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">
          {this.renderBox()}
        </div>
      </div>
    );
  }
}

export default palette;