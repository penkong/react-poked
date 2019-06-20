import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  state = { todos : [ {task: 'walk the fish'}, {task: 'Greem dream'}] };
  createTodo = newTodo => {
    this.setState({ todos: [...this.state.todos, newTodo ]});
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />
    });
    return (
      <div>
        <h1>TODO LIST!</h1>
        <TodoForm createTodo={this.createTodo}/>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;