// import "./JokeList.css";
import axios from 'axios';
import uuid from 'uuid/v4';
import React, { Component } from 'react';
import Joke from './Joke';

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
      jokes.push({id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes });
  }
  handleVote = (id, delta) => {
    
  }
  renderContent(){
    return this.state.jokes.map( j => (
      <Joke key={j.id} text={j.text} votes={j.votes}/>
    ))
  }
  render() {
    return (
      <div className="JokesList">
      <div className="JokesList-sidebar">
        <h1 className="JokesList-title">Dad Jokes</h1>   
      </div>
        <div className="JokeList-jokes">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default JokeList;