import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  state = { jokes: [] };
  async componentDidMount() {
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const url = 'https://icanhazdadjoke.com/'
      const res = await axios.get(url, {headers:{ Accept: 'application/json'}});
      jokes.push(res.data.joke);
    }
    this.setState({ jokes });
  }
  renderContent(){
    return this.state.jokes.map( j => (
      <div>{j}</div>
    ))
  }
  render() {
    return (
      <div className="JokesList">
        <h1>Dad Jokes</h1>    
        <div className="JokeList-jokes">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default JokeList;