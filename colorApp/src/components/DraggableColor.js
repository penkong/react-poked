import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import styles from '../styles/DraggableColorStyles';

const DraggableColorBox = SortableElement((props) => {
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
})
export default withStyles(styles)(DraggableColorBox);
