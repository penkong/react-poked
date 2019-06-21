import React, { Component } from 'react';

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <button onClick={this.props.upVote}>up</button>
          <span>{this.props.votes}</span>
          <button onClick={this.props.downVote}>down</button>
        </div>
        <div className="Joke-text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Joke;