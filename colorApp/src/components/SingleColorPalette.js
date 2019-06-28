import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
  Palette: {
    height: "97vh",
    width: "100vw",
    margin: "0",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      position: "absolute",
      display: "inline-block",
      width: "100px",
      height: "30px",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255,255,255,0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      color: "white",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
    }
  }
}

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
        key={color.name} 
        name={color.name} 
        background={color[format]}
        showFullPalette={false}
      />
    ))
    
  }
  render() {
    const { paletteName, emoji,id } = this.props.palette;
    const { classes } = this.props;
    return (
      // this is inside color box.css
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showAllColors={false}/>
        <div className={classes.colors}>
          {this.renderBoxes()}
          <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    ); 
    // 
  }
}

export default withStyles(styles)(SingleColorPalette);