import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/MiniPaletteStyles';
// styled component from m aterial pass props behind named classes
// if we cl classes we will see a specific class name produce 
// and make that top style specific to this scope
// cool and can write sass style components;

class MiniPalette extends Component {
  deletePalette = e => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;
  
    const miniColorBoxes = colors.map(color => (
      <div 
        className={classes.miniBox} 
        style={{backgroundColor: color.color}} 
        key={color.name}
      />
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon 
          className={classes.deleteIcon} 
          style={{transition: "all .3s ease-in-out"}}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span> 
        </h5>
      </div>
    )
  }  
}

export default withStyles(styles)(MiniPalette);