import React, {useState, useEffect} from 'react';
import useTodos from '../hooks/useTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const TodoApp = () => {
  // default props
  const initTodos = JSON.parse(window.localStorage.getItem("todos")) || "[]"
  // state
  const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodos(initTodos);
  // const initTodos = [
  //   {id: 1, task: "clean", completed: false},
  //   {id: 2, task: "eat", completed: true},
  //   {id: 3, task: "sleep", completed: false}
  // ];
  // like lifeCycle trace changes
  useEffect(()=> {
    // obj to json
    window.localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

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
        <Grid container justify='center' style={{marginTop: "1rem"}}>
          <Grid item xs={11} md={8} lg={6}>
            <TodoForm addTodo={addTodo}/>
            <TodoList 
              todos={todos} 
              removeTodo={removeTodo} 
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
    </Paper>
  )
}

export default TodoApp;
