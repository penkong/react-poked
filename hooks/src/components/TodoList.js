import React from 'react'
import Todo from './Todo';

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return (
    <Paper>
      <List>
        {todos.map(({id,task,completed})=> (
          <>
            <Todo 
              id={id}
              key={id} 
              task={task} 
              completed={completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider/>
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
