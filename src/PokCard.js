import React, { Component } from 'react';

class PokCard extends Component {
  render() {
    return (
      <div className="PokCard">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default PokCard;