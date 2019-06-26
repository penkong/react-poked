import './Palette.css';

import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';


class palette extends Component {

  state = {level: 500};

  changeLevel = (newLevel) => {
    this.setState({level: newLevel});
  }

  renderSlider(){
    return (
      <Slider 
          defaultValue={this.state.level} 
          min={100} 
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
      />
    )
  }

  renderBox(){
    return this.props.palette.colors[this.state.level].map(color => {
      return <ColorBox background={color.hex} name={color.name}/>
    })
  }
  render() {
    return (
      <div className="Palette">
        {this.renderSlider()}
        <div className="Palette-colors">
          {this.renderBox()}
        </div>

      </div>
    );
  }
}

export default palette;