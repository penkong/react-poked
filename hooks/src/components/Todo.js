import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import EditTodoForm from './EditTodoForm';
import useToggleState from '../hooks/useToggleState';

import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({id, task, completed}) => {
  const [isEditing, toggle] = useToggleState();
  // const { removeTodo, toggleTodo } = useContext(TodosContext);
  const { dispatch } = useContext(TodosContext);
  return (
    <ListItem style={{height: "64px"}}>
      {
        isEditing 
        ? <EditTodoForm 
            id={id} 
            task={task} 
            toggleEditForm={toggle}
          />
        : <>
            <Checkbox tabIndex={-1} checked={completed} onClick={()=> dispatch({type: "TOGGLE", id})}/>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={()=> dispatch({type: "REMOVE", id })}>
                <DeleteIcon/>
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </>
      }
      
    </ListItem>
  )
}

export default Todo;
