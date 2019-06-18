import './RolDicc.css';
import React, { Component } from 'react';
import Dicc from './Dicc';

class RolDicc extends Component {
  state = {dicc1: 'one', dicc2:'one', rolled: false};
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six" ]
  };
  roll = () => {
    const {sides} = this.props;
    const newDicc1 = sides[Math.floor(Math.random()* sides.length)];
    const newDicc2 = sides[Math.floor(Math.random()* sides.length)];
    this.setState({ dicc1: newDicc1, dicc: newDicc2, rolled: true });
    setTimeout(()=>{
      this.setState({rolled: false})
    }, 1000);
  }
  render() {
    return (
      <div className="RolDicc">
        <div className="RolDicc-container">
          <Dicc face={this.state.dicc1}/>
          <Dicc face={this.state.dicc2}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolled}>
          {this.state.rolled? 'Rolling ...' : 'Roll dicc!'}
        </button>
      </div>
    );
  }
}

export default RolDicc;