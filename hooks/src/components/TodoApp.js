import React from 'react';
import { TodosProvider } from '../contexts/todos.context';
import useTodosState from '../hooks/useTodosState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const TodoApp = () => {
  // state
  // const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodosState('');
  // like lifeCycle trace changes
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
            <TodosProvider>
              <TodoForm/>
              <TodoList/>
            </TodosProvider>
          </Grid>
        </Grid>
    </Paper>
  )
}

export default TodoApp;

{/* <TodosProvider>
  <TodoForm addTodo={addTodo}/>
  <TodoList 
    todos={todos} 
    removeTodo={removeTodo} 
    toggleTodo={toggleTodo}
    editTodo={editTodo}
  />
</TodosProvider> */}