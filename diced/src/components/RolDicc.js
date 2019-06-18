import React, { Component } from 'react';
import Dicc from './Dicc';

class RolDicc extends Component {
  state = {dicc1: 'one', dicc2:'one'};
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six" ]
  };
  roll = () => {
    const {sides} = this.props;
    const newDicc1 = sides[Math.floor(Math.random()* sides.length)];
    const newDicc2 = sides[Math.floor(Math.random()* sides.length)];
    this.setState({ dicc1: newDicc1, dicc2: newDicc2 });
  }
  render() {
    return (
      <div>
        <Dicc face={this.state.dicc1}/>
        <Dicc face={this.state.dicc2}/>
        <button onClick={this.roll}>Roll Dicc!</button>
      </div>
    );
  }
}

export default RolDicc;