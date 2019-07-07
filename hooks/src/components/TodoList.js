import React from 'react'
import Todo from './Todo';


import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

const TodoList = ({todos}) => {
  return (
    <Paper>
      <List>
        {todos.map(({id,task,completed})=> (
          <>
            <Todo 
              key={id} 
              task={task} 
              compeleted={completed}
            />
            <Divider/>
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
