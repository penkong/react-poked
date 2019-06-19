import './Box.css';
import React, { Component } from 'react';
import { choice } from './helpers';
class Box extends Component {
  state = { color: choice(this.props.colors) };
  //let us take new color not before one.
  pickColor(){
    let newColor
    do {
      newColor = choice(this.props.colors);
    } while ( newColor === this.state.color )
    this.setState({ color: newColor });
  }
  handleClick = e => this.pickColor();
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