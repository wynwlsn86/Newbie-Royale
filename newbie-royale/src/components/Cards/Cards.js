import React, { Component } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard'
import Search from '../Search/Search'

class Cards extends Component {
    constructor() {
        super();
        this.state= {
            card: [],
            search: '',
            select: '',
            cardSelected: false
        }
        this.selectCard = this.selectCard.bind(this);
        this.searchCards = this.searchCards.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    selectCard = (e) => {
        console.log('hello');

        //i want to set the state of card to the index of (id)
        this.setState({
                        cardSelected: true,
                        card: this.props.cards[e.target.id]});
        console.log(e.target.id)
    }

    searchCards = (e) => {
        this.setState({search: e.target.value });
    }

    goBack = () => {
        this.setState({cardSelected: false});
    }
    clear = () => {
        this.setState({search: ''});
    }
    
    render() {

        if(this.state.cardSelected === true){
            return (
                <SelectedCard 
                    card={this.state.card}
                    goBack={this.goBack}
                    cardSelected={this.state.cardSelected}
                />
            )
        }
        else{
            return (
                <div className='cards-main'>
                    <h1>Cards</h1>
                    <Search 
                        search={this.searchCards}
                        clear={this.clear}
                        />
                    {/* {
                        this.props.cards.map( (card, id) => 
                            <div
                            id={id}
                            className={card.idName}
                            key={card.idName}
                            onClick={this.selectCard}
                            >
                                {card.name}
                            </div>
                        )
                    } */}

                {
                    this.props.cards.filter(card => {
                        return card.name.toLowerCase().includes(this.state.search.toLowerCase());
                    }).map((card, id) => 
                        <div
                        id={id}
                        className={card.idName}
                        key={card.idName}
                        onClick={this.selectCard}
                        >
                            {card.name}
                        </div>
                    )
                }
                </div>
            );
        }

    }
}

export default Cards;

