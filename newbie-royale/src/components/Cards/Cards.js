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
        for(let i = 0; i < this.props.cards.length; i++){
            console.log(`${this.props.cards[i].copyId}`, e.target.id);
            if(this.props.cards[i].copyId == e.target.id){
                this.setState({card: this.props.cards[i]});
                console.log(e.target.id)
            }
            else{
                console.log('bye')
            }
        }
        //i want to set the state of card to the index of (id)
        this.setState({
                        cardSelected: true
                        });
        console.log(e.target.id)
    }

    searchCards = (e) => {
        this.setState({search: e.target.value });
    }

    goBack = () => {
        this.setState({cardSelected: false});
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
                    <h1 className='page-heading center-heading'>Cards</h1>
                    <Search 
                        search={this.searchCards}
                        clear={this.clear}
                        />

                    <div className='flex-list'>
                        {
                            this.props.cards.filter(card => {
                                return card.name.toLowerCase().includes(this.state.search.toLowerCase());
                            }).map((card, id) => 
                                <div
                                id={card.copyId}
                                className='card-list box'
                                key={card.idName}
                                onClick={this.selectCard}
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

