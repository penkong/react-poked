import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main : {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "blue",
      "& span": {
        background: "yellow"
      }
    },
  },
  secondary: {
    backgroundColor: "pink"
  }
}


function MiniPalette(props) {
  // styled component from material pass props behind named classes
  // if we cl classes we will see a specific class name produce 
  // and make that top style specific to this scope
  // cool and can write sass style components;
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <h1 className={classes.secondary}>Mini Palette</h1>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);