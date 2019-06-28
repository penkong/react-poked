import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from '../styles/PaletteStyles';



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