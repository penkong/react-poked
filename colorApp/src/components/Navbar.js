import 'rc-slider/assets/index.css';
import './Navbar.css';

import React, { Component } from 'react';
import Slider from 'rc-slider';

const styles = [{
    backgroundColor: "transparent"
  },
  {
    height: "8px"
  },
  {
    backgroundColor: "green",
    outline: "none",
    border: "2px solid green",
    boxShadow: "none",
    width: "14px",
    height: "14px",
    marginLeft: "-5px",
    marginTop: "-3px"
  }
]

class Navbar extends Component {

  renderSlider(){
    const {level, changeLevel} = this.props;
    return (
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider 
              defaultValue={level} 
              min={100} 
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={styles[0]}
              railStyle={styles[1]}
              handleStyle={styles[2]}
          />
        </div>
      </div>
      
    )
  }

  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactCOlorPoik</a>
        </div>
        {this.renderSlider()}
      </header>
    );
  }
}

export default Navbar;