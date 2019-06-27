import React from 'react';
import { withStyles } from '@material-ui/styles';
// styled component from m aterial pass props behind named classes
// if we cl classes we will see a specific class name produce 
// and make that top style specific to this scope
// cool and can write sass style components;
const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "4px",
    padding: ".5rem",
    paddingRight: ".3rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    }
  },
  colors: {
    backgroundColor: "#daele4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  miniBox: {
    height: "25%",
    width: "20%", 
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: ".5rem",
    marginBottom: ".45rem",
    fontSize: "1.5rem"
  }
}

function MiniPalette(props) {
  
  const { classes, paletteName, emoji, colors } = props;

  const miniColorBoxes = colors.map(color => (
    <div 
      className={classes.miniBox} 
      style={{backgroundColor: color.color}} 
      key={color.name}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span> 
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);