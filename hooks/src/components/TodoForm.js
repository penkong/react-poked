import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const TodoForm = (props) => {
  const [value, handleChange, reset] = useInputState('');
  // const { addTodo } = useContext(TodosContext);
  const { dispatch } = useContext(TodosContext);
  const submit = e=> {
    e.preventDefault();
    dispatch({type: "ADD", task: value});
    reset();
  }
  return (
    <Paper style={{margin: "1rem 0", padding:"0 1rem"}}>
      <form onSubmit={submit}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin='normal' 
          label='add new Todo' 
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm;
