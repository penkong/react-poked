import React, { Component } from 'react';
import uuid from 'uuid/v4';
class NewBoxForm extends Component {
  state = {height: '', width: '', color: ''};
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const newBox = {...this.state, id: uuid() }
    this.props.createBox(newBox);
    //reset form inputs
    this.setState({ height: '', width: '', color: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height :</label>
          <input 
            id="height"
            type="text" 
            name="height" 
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width :</label>
          <input 
            id="width"
            type="text" 
            name="width" 
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color :</label>
          <input 
            id="color"
            type="text" 
            name="color" 
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add new Box</button>
      </form>
    );
  }
}

export default NewBoxForm;