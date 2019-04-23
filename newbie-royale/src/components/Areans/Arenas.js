import React, { Component } from 'react';

class Arenas extends Component {
    render() {
  
                            /* cardUnlocks: [
        "5b099537ab411c001423ec3b",
        "5b099537ab411c001423ec3c",
        "5b099537ab411c001423ec3d",
        "5b099537ab411c001423ec3e",
        "5b099537ab411c001423ec3f",
        "5b099537ab411c001423ec41",
        "5b099537ab411c001423ec42",
        "5b099537ab411c001423ec43",
        "5b099537ab411c001423ec44",
        "5b099537ab411c001423ec45",
        "5b099537ab411c001423ec46",
        "5b099537ab411c001423ec47"
        ], */

        return (
            <div className='arena-main'>
                <h1>Arenas</h1>
                {
                this.props.arenas.map( arena => 
                    <div
                    className={arena.idName}
                    key={arena.idName}
                    >
                    <img src={`http://www.clashapi.xyz/images/arenas/${arena.idName}.png`} alt='' />
                    <div>{arena.name}</div>
                    <div>Victory Gold: {arena.victoryGold}</div>
                    <div>Required Trophies: {arena.minTrophies}</div>
                    {
                        arena.cardUnlocks.map( card => {
                            let stuff = []
                            for (let i = 0; i < this.props.cards.length; i++){
                                if(card === this.props.cards[i]._id ){
                                    stuff.push(<div key={this.props.cards.name}></div>);
                                }
                            }
                            console.log(stuff);
                        })
                    }



                </div>
                )

                }
            </div>
        );
    }
}

export default Arenas;