import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

// createTODO = todoForm => todoList => todo 
// removeTodo = id from todoForm => todoList => todo
class TodoList extends Component {
  state = { todos : [] };
  removeTodo = id => this.setState({ 
    todos: this.state.todos.filter( todo => todo.id !== id )
  });
  createTodo = newTodo => {
    this.setState({ todos: [...this.state.todos, newTodo ]});
  }
  renderTodos(){
    return this.state.todos.map( 
      todo => <Todo 
                key={todo.id} 
                id={todo.id}
                task={todo.task}
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