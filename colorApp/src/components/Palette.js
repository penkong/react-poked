import './Palette.css';


import React, { Component } from 'react';
import ColorBox from './ColorBox';


class palette extends Component {
  renderBox(){
    return this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name}/>
    })
  }
  render() {
    return (
      <div className="Palette">
        {/* navbar */}
        <div className="Palette-colors">
          {this.renderBox()}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default palette;