import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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

  state = {format: 'hex', open: false};

  closeSnackBar = () => {
    this.setState({open: false});
  }

  renderSnackBar(){
    const anchorOrigin = {vertical:"bottom",horizontal:"left"};
    const { open } = this.state;
    const message = <span id="message-id">Format Changed!</span>;
    //accessibility
    const contentProps = {"aria-describedby": "message-id"};
    const action = [
      <IconButton onClick={this.closeSnackBar} color="inherit" key="close">
        <CloseIcon/>
      </IconButton>
    ];

    return (
      <Snackbar 
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={3000}
        onClose={this.closeSnackBar}
        message={message}
        ContentProps={contentProps}
        action={action}
      />
    )
  }

  handleFormatChange = e => {
    const { handleChange } = this.props;
    this.setState({ format: e.target.value, open: true });
    handleChange(e.target.value);
  }

  renderSelect(){
    const { format } = this.state;
    return (
      <div className="select-container">
        <Select value={format} onChange={this.handleFormatChange}>
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
        <a href="/">ReactUICOLORS</a>
      </div>
    )
  }

  render() {
    
    return (
      <header className="Navbar">
        {this.renderLogo()}
        {this.renderSlider()}
        {this.renderSelect()}
        {this.renderSnackBar()}
      </header>
    );
  }
}

export default Navbar;