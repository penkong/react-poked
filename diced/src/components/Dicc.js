import React, { Component } from 'react';
import './Dicc.css';
class Dicc extends Component {
  render() {
    return (
      <i className={`Dicc fas fa-dice-${this.props.face}`}/>
    );
  }
}

export default Dicc;