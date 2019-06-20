import React, { Component } from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component {
  state = {task: ""};
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: "" }); //reset form after submit
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New TODO</label>
        <input 
          id="task" 
          type="text" 
          placeholder="New TODO"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}  
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;