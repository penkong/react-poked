import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  state = { todos : [ {task: 'walk the fish'}, {task: 'Greem dream'}] };
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />
    });
    return (
      <div>
        <h1>TODO LIST!</h1>

        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;