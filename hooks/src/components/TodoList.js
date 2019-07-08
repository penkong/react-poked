import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import Todo from './Todo';

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = () => {
  const todos = useContext(TodosContext);
  if(todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todos, index)=> (
            <React.Fragment key={index}>
              <Todo {...todos} key={todos.id}/>
              {(index < todos.length - 1) && <Divider/>}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    )
  }
  return null;
}

export default TodoList
