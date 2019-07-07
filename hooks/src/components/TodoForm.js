import React from 'react';
import useInputState from '../hooks/useInputState';

import Paper from "@material-ui/core/Paper";
import TexField from "@material-ui/core/TexField";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper>
      <form onSubmit={e=> {
        e.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TexField value={value} onChange={handleChange}/>
      </form>
    </Paper>
  )
}

export default TodoForm;
