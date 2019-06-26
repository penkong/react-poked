import './ColorBox.css';
import React, { Component } from 'react';


class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{background: this.props.background}}>
        {/* we click on this span to see more of that specific color */}
        <span>
          {this.props.name}
        </span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;