import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import styles from '../styles/NavBarStyles';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
  // open is state related to snack bar for close
  state = {format: 'hex', open: false};

  renderLogo(){
    const { classes } = this.props
    return(
      <div className={classes.logo}>
        <NavLink to="/">reactcolorswithit</NavLink>
      </div>
    )
  }

  renderSlider(){
    const {level, changeLevel, classes} = this.props;
    return (
      <div className={classes.selectContainer}>
        <span>Level: {level}</span>
        <div className={classes.slider}>
          <Slider 
            defaultValue={level} 
            min={100} 
            max={900}
            step={100}
            onAfterChange={changeLevel}
            // trackStyle={trackStyle}
            // railStyle={railStyle}
            // handleStyle={handleStyle}
          />
        </div>
      </div>
      
    )
  }

  handleFormatChange = e => {
    const { handleChange } = this.props;

    this.setState({ format: e.target.value, open: true });
    handleChange(e.target.value);
  }

  renderSelect(){
    const { format } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.selectContainer}>
        <Select value={format} onChange={this.handleFormatChange}>
          <MenuItem value="hex">HEX - #fff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    )
  }

  closeSnackBar = () => this.setState({open: false});
  
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

  render() {
    const { showAllColors, classes } = this.props;
    return (
      <header className={classes.Navbar}>
        {this.renderLogo()}
        { showAllColors && this.renderSlider()}
        {this.renderSelect()}
        {this.renderSnackBar()}
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);