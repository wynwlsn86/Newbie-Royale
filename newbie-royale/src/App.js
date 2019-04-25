import React, { Component } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


class App extends Component {
  constructor() {
    super();
    this.state= {
      cards: [],
      card: [],
      arenas: [],
      leagues: [],
      leaguePics: [],
      chests: [],
      deck: [],
      cardSelected: false,
      deckSelected: false,
    }
    this.goBack = this.goBack.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.goBackDeck = this.goBackDeck.bind(this);
    this.showDeck = this.showDeck.bind(this);
  }
  componentDidMount() {
    this.getCards();
    this.getArenas();
    this.getLeagues();
    this.getChests();
  }
  getCards() {
    fetch('http://www.clashapi.xyz/api/cards')
      .then(response => response.json())
      .then(data => this.setState({cards: data}));
  }
  getArenas() {
    fetch('http://www.clashapi.xyz/api/arenas')
      .then(response => response.json())
      .then(data => this.setState({arenas: data}));
  }
    getLeagues() {
    fetch('http://www.clashapi.xyz/api/leagues')
      .then(response => response.json())
      .then(data => this.setState({leagues: data}));
  }
    getChests() {
    fetch('http://www.clashapi.xyz/api/chests')
      .then(response => response.json())
      .then(data => this.setState({chests: data}));
  }
  selectCard = (e) => {
    for(let i = 0; i < this.state.cards.length; i++){
        if(this.state.cards[i].copyId == e.target.id){
            this.setState({card: this.state.cards[i]});
        }
    }
    this.setState({
                    cardSelected: true
                    });
}
goBack = () => {
  this.setState({cardSelected: false});
}
goBackDeck = () => {
  this.setState({deckSelected: false});
}
showDeck = () => {
  this.setState({deckSelected: true})
}

  addToDeck = () => {
    if(this.state.deck.length > 7){
        alert('Deck is full. 8 Card Maximum')
    }
    else{
        if(this.state.deck.length === 0){
            this.setState(state => {
                const deck = this.state.deck.push(this.state.card)
                return deck;
            });
        }
        else{
            let shouldBeDeck = true;
            for(let i = 0; i < this.state.deck.length; i++){
                if(this.state.deck[i].copyId == this.state.card.copyId){
                    alert('Already Selected This Card. Only 1 Per Card Allowed')
                    shouldBeDeck = false;
                }
            }
            if(shouldBeDeck){
                this.setState(state => {
                    const deck = this.state.deck;
                    deck.push(this.state.card);
                    return deck;
                    
                }
            );
        
            } 
        }
    }
}
  render() {
    return (
        <div>
          <Nav 
            deck={this.state.deck}
            showDeck={this.showDeck}
            goBackDeck={this.goBackDeck}
            deckSelected={this.state.deckSelected}
          />
          <div className='fill-bg'>
            <Main 
              cards={this.state.cards}
              chests={this.state.chests}
              arenas={this.state.arenas}
              leagues={this.state.leagues}
              deck={this.state.deck}
              addToDeck={this.addToDeck}
              card={this.state.card}
              selectCard={this.selectCard}
              cardSelected={this.state.cardSelected}
              goBack={this.goBack}
              goBackDeck={this.goBackDeck}
              deckSelected={this.state.deckSelected}
              showDeck={this.showDeck}
              />
            <Footer /> 
           </div>
          
        </div>
    );
  }
}

export default App;
