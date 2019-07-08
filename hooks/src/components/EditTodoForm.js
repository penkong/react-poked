import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';

import TextField from "@material-ui/core/TextField";

const EditTodoForm = ({id, task, toggleEditForm}) => {
  // const { editTodo } = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  const edited = e => {
    e.preventDefault();
    dispatch({type: "EDIT", id, newTask:value});
    reset();
    toggleEditForm();
  };
  return (
    <form onSubmit={edited}
      style={{marginLeft: "1rem", width: "50%"}}
    >
      <TextField 
        margin='normal' 
        value={value} 
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
