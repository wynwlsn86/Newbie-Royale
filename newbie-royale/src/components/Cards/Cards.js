import React, { Component } from 'react';

class Cards extends Component {
    constructor() {
        super();
        this.state= {
            card: []
        }
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard = (e) => {
        console.log(e.target.getAttribute('data-key'));
    }
    
    render() {
        return (
            <div>
                <h1>Cards</h1>
                {
                    this.props.cards.map( card => 
                        <button 
                            key={card.idName}
                            onClick={this.selectCard}
                            >
                            {card.name}
                        </button>
                    )

                }
            </div>
        );
    }
}

export default Cards;