import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const TodoApp = () => {
  const initTodos = [
    {id: 1, task: "clean", completed: false},
    {id: 2, task: "eat", completed: true},
    {id: 3, task: "sleep", completed: false}
  ];
  const [todos,setTodos] = useState(initTodos);
  const addTodo = newTodoText => {
    setTodos({...todos, {id: 4, task: newTodoText, completed: false}});
  }
  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
      >
        <AppBar color="primary" position="static" style={{height: "64px"}}>
          <Toolbar>
            <Typography color="inherit">TODO HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
    </Paper>
  )
}

export default TodoApp;
