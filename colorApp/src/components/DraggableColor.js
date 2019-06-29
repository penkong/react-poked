import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.4)",
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all .3s ease-in-out",
  }
};

function DraggableColorBox(props) {
  const { classes, name, color, handleClick } = props
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}
    >
    <div className={classes.boxContent}>
      <span>{name}</span>
      <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>

    </div>
      {name}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);