import React, { Component } from 'react';

class SelectedCard extends Component {
    render() {
        return (
            //Want to reuse this so it will also work with leagues/arenas on select
            //Not rendering anything. also props showing as Context.Provider(?)
            <div>
                <p>Selected Card</p>
                <img src={`http://www.clashapi.xyz/images/cardss/royal-arena.png`} alt='' />
            </div>
        );
    }
}

export default SelectedCard;