import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

// createTODO = todoForm => todoList => todo 
// removeTodo = id from todoForm => todoList => todo
class TodoList extends Component {
  state = { todos : [] };
  //for ui
  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...this.state.todos, completed: !todo.completed }
      }
      return todo;
    })
    this.setState({ todos: updatedTodos });
  }
  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...this.state.todos, task: updatedTask }
      }
      return todo;
    })
    this.setState({ todos: updatedTodos });
  }

  removeTodo = id => this.setState({ 
    todos: this.state.todos.filter( todo => todo.id !== id )
  });

  createTodo = newTodo => this.setState({ 
    todos: [...this.state.todos, newTodo ]
  });

  renderTodos(){
    return this.state.todos.map( 
      todo => 
      <Todo 
        key={todo.id} 
        id={todo.id}
        task={todo.task}
        toggleCompletion={this.toggleCompletion}
        completed={todo.completed}
        updateTodo={this.updateTodo}
        removeTodo={this.removeTodo}
      /> 
    );
  }

  render() {
    return (
      <div>
        <h1>TODO LIST!</h1>
        <ul>{this.renderTodos()}</ul>
        <TodoForm createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default TodoList;