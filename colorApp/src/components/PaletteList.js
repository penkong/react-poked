import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';
// jss using styled components
// material ui has own internal
class PaletteList extends Component {

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  }
  renderPalettes(){
    const { palettes, deletePalette } = this.props;
    return palettes.map(palette => (
      <MiniPalette 
        key={palette.id}
        id={palette.id}
        deletePalette={deletePalette}
        {...palette} 
        handleClick={()=>this.goToPalette(palette.id)}
      />
    ))
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Picker</h1>
            <NavLink to="/palette/new">Create</NavLink>
          </nav>
          
          <div className={classes.palettes}>
            {this.renderPalettes()}
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);