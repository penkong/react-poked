import React, { Component } from 'react';
import './Box.css';
class Box extends Component {
  state = {color: 'purple'};

  handleClick = e => {

  }
  render() {
    return (
      <div className="Box" 
        style={{backgroundColor:this.state.color}}
        onClick={this.handleClick}
      >
        
      </div>
    );
  }
}

export default Box;