import React, { Component } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard'
import Search from '../Search/Search'
import { Route, Link } from 'react-router-dom'

class Cards extends Component {
    constructor() {
        super();
        this.state= {
            card: [],
            search: ''
        }
        this.selectCard = this.selectCard.bind(this);
        this.searchCards = this.searchCards.bind(this);
    }

    selectCard = (e) => {
        console.log(e.target.getAttribute('data-key'));
    }

    searchCards = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div className='cards-main'>
                <h1>Cards</h1>
                <Search 
                    submit={this.searchCards}
                    />
                {
                    this.props.cards.map( card => 
                        <div
                        className={card.idName}
                        key={card.idName}
                        >
                        {/* <img src={`http://www.clashapi.xyz/images/cardss/${card.idName}.png`} alt='' /> */}
                        <Link to='/SelectedCard'>{card.name}</Link>
                        <Route 
                            path='/SelectedCard' 
                            render={() => 
                            <SelectedCard 
                                card={this.card}
                        />} />

                    </div>
                    )
                }
            </div>
        );
    }
}

export default Cards;