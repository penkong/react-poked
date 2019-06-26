import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

import React, { Component } from 'react';
import Slider from 'rc-slider';

const styles = [
  {
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

  state = {format: 'hex'};

  handleChange = e => {
    const { handleChange } = this.props;
    this.setState({ format: e.target.value });
    handleChange(e.target.value);
  }

  renderSelect(){
    const { format } = this.state;
    return (
      <div className="select-container">
        <Select value={format} onChange={this.handleChange}>
          <MenuItem value="hex">HEX - #fff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    )
  }

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

  renderLogo(){
    return(
      <div className="logo">
        <a href="/"></a>
      </div>
    )
  }
  render() {
    
    return (
      <header className="Navbar">
        {this.renderLogo()}
        {this.renderSlider()}
        {this.renderSelect()}
      </header>
    );
  }
}

export default Navbar;