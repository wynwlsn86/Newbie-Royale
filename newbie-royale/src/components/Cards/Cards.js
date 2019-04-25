import React, { Component } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard'
import Search from '../Search/Search'
import Deck from '../Deck/Deck'

class Cards extends Component {
    constructor() {
        super();
        this.state= {
            search: '',
            select: '',
            deckSelected: false,
            cardsInDeck: 0
        }
 
        this.searchCards = this.searchCards.bind(this);
        this.goBackDeck = this.goBackDeck.bind(this);
    }



    searchCards = (e) => {
        this.setState({search: e.target.value });
    }
    goBackDeck = () => {
        this.setState({deckSelected: false});
    }
    showDeck = () => {
        this.setState({deckSelected: true})
    }
    
    render() {
        if(this.state.deckSelected === true){
            return (
            <Deck 
                goBack={this.goBackDeck}
                deck={this.props.deck}
            />
            )
        }
        else if(this.props.cardSelected === true){
            return (
                <SelectedCard 
                    card={this.props.card}
                    goBack={this.props.goBack}
                    cardSelected={this.state.cardSelected}
                    addToDeck={this.props.addToDeck}
                />
            )
        
        }
        else{
            return (
                <div className='cards-main'>
                    <h1 className='page-heading center-heading'>Cards</h1>
                    <Search 
                        search={this.searchCards}
                        clear={this.clear}
                        selectCard={this.props.selectCard}
                        />
                    <button id='input-style'onClick={this.showDeck}>Deck Cards:{this.props.deck.length}</button>
                    <div className='flex-list'>
                        {
                            this.props.cards.filter(card => {
                                return card.name.toLowerCase().includes(this.state.search.toLowerCase());
                            }).map((card, id) => 
                                <div
                                id={card.copyId}
                                className='card-list box'
                                key={card.idName}
                                onClick={this.props.selectCard}
                                >
                                    {card.name}
                                </div>
                            )
                        }
                    </div>
                </div>
            );
        }

    }
}

export default Cards;

