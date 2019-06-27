import './PaletteList.css';
import { withStyles, mergeClasses } from '@material-ui/styles';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MiniPalette from './MiniPalette';

// import palette from './Palette';
// jss using styled components
// material ui has own internal

const styles = {
  root: {
    backgroundColor: "lightblue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",

  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%", 
  }
}
class PaletteList extends Component {

  renderPalettes(){
    const { palettes } = this.props;
    return palettes.map(palette => (<MiniPalette {...palette} />))
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          
          <nav className={classes.nav}>
            <h1>React Picker</h1>
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