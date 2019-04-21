import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


class App extends Component {
  constructor() {
    super();
    this.state= {
      cards: [],
      arenas: [],
      leagues: [],
      leaguePics: [],
      chests: []
    }
    
  }
  componentDidMount() {
    this.getCards();
    this.getArenas();
    this.getLeagues();
    // this.getLeaguePics();
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
  // getLeaguePics() {
  //   fetch(`http://www.clashapi.xyz/api/images/leagues/royal-arena.png`)
  //   .then(response => response.json())
  //   .then(data => this.setState({leaguesPics: data}));
  // }
    getChests() {
    fetch('http://www.clashapi.xyz/api/chests')
      .then(response => response.json())
      .then(data => this.setState({chests: data}));
  }
  render() {
    return (
        <div className='body'>
          <Nav />
          <div>
            <Main 
              cards={this.state.cards}
              chests={this.state.chests}
              arenas={this.state.arenas}
              leagues={this.state.leagues}
              />
            <Footer />
          </div>
          
        </div>
    );
  }
}

export default App;
