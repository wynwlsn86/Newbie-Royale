import React, { Component } from 'react';

class SelectedCard extends Component {
    
    render() {
        return (
        <div className='cards-main'>
            <div className='card-bg'>
                <button className='back-button' onClick={this.props.goBack}>Back</button>
                <div className='box selected-card'>
                    <div><h1>{this.props.card.name}</h1></div>
                    <img src={`http://www.clashapi.xyz/images/cards/${this.props.card.idName}.png`} alt='' />
                    <div>{this.props.card.elixirCost}</div>
                    <div>{this.props.card.type}</div>
                    <div>{this.props.card.rarity}</div>
                    <div>{this.props.card.description}</div>
                </div>
            </div>
        </div>
        );
    }
}

export default SelectedCard;