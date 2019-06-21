// import "./JokeList.css";
import axios from 'axios';
import uuid from 'uuid/v4';
import React, { Component } from 'react';
import Joke from './Joke';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  state = { jokes: JSON.parse(window.localStorage.getItem("jokes")) || [] };
  componentDidMount() {
    if(!this.state.jokes.length) this.getJokes();
  }
  getJokes = async () => {
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const url = 'https://icanhazdadjoke.com/'
      const res = await axios.get(url, {headers:{ Accept: 'application/json'}});
      jokes.push({id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes });
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  }

  handleVote = (id, delta) => {
    this.setState(oldState => ({
      jokes: oldState.jokes.map(
        j => j.id === id ? {...j, votes: j.votes + delta} : j
      )
    }))
  }

  renderContent(){
    return this.state.jokes.map( j => (
      <Joke 
        key={j.id} 
        text={j.text} 
        votes={j.votes}
        upVote={()=>this.handleVote(j.id, 1)}
        downVote={()=>this.handleVote(j.id, -1)}
      />
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