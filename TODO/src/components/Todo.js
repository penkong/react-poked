import React, { Component } from 'react';

class Todo extends Component {
  state = { isEditing: false , task: this.props.task };
  handleSubmitUpdate = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id , this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  toggleForm = () => this.setState({ isEditing: true });
  handleRemove = () => this.props.removeTodo(this.props.id);
  renderContent(){
    if(this.state.isEditing){
      return (
        <div>
          <form onSubmit={this.handleSubmitUpdate}>
            <input 
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}  
            />
            <button>save</button>
          </form>
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
  render() {
    return <div>{this.renderContent()}</div> 
  }
}

export default Todo;