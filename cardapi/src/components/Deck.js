import React, { Component } from 'react';
import axios from 'axios';




const baseUrl = `https://deckofcardsapi.com/api/deck`;
class Deck extends Component {
  state = { deck: null, drawn: [] };

  async componentDidMount() {
    const deck = await axios.get(`${baseUrl}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
  getCard = async () => {
    const { deck_id } = this.state.deck;
    try {
      const cardUrl = `${baseUrl}/${deck_id}/draw/`;
      const res = await axios.get(cardUrl);
      if(!res.data.success) throw new Error("No cards left");
      const card = res.data.cards[0];
      this.setState(state => ({
        drawn: [
          ...state.drawn, 
          {
            id: card.code , 
            image: card.image ,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err){
      alert(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Card dealer</h1>
        <button onClick={this.getCard}>get Card!</button>
      </div>
    );
  }
}

export default Deck;