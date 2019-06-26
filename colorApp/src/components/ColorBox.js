import './ColorBox.css';
import React, { Component } from 'react';


class ColorBox extends Component {

  render() {
    const { name, background } = this.props;
    return (
      <div className="ColorBox" style={{background}}>
        {/* we click on this span to see more of that specific color */}
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;