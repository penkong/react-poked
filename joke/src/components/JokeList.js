// import "./JokeList.css";
import axios from 'axios';
import uuid from 'uuid/v4';
import React, { Component } from 'react';
import Joke from './Joke';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  state = { 
    jokes: JSON.parse(window.localStorage.getItem("jokes")) || [],
    loading: false
  };
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
    this.setState(oldState => ({
      loading: false,
      jokes: [...oldState.jokes, ...jokes]
    }), 
      ()=> window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }


  handleClick = () => {
    this.setState({loading: true}, this.getJokes);
  };


  handleVote = (id, delta) => {
    this.setState(oldState => ({
      jokes: oldState.jokes.map(
        j => j.id === id ? {...j, votes: j.votes + delta} : j
      )
    }), 
      ()=> window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
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
    if(this.state.loading) return <div>Loading</div>
    return (
      <div className="JokesList">
      <div className="JokesList-sidebar">
        <h1 className="JokesList-title">Dad Jokes</h1>
        <button onClick={this.handleClick}>new Jokes</button>   
      </div>
        <div className="JokeList-jokes">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default JokeList;