import React, { Component } from 'react';
import SelectedChest from '../SelectedChest/SelectedChest'

class Chests extends Component {
    constructor() {
        super();
        this.state= {
            chest: [],
            chestIdName: ["wooden-chest", "silver-chest", "golden-chest", "crown-chest", "magical-chest", "giant-chest", "super-magical-chest", "epic-chest", "legendary-chest", "lightning-chest", "fortune-chest"],
            search: '',
            select: '',
            chestSelected: false,
            reducedChests: []
        }
        this.selectChest = this.selectChest.bind(this);
        this.searchChests = this.searchChests.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        this.reducedChests();
    }
    
    selectChest = (e) => {
        console.log('hello');
        this.setState({
                        chestSelected: true,
                        chest: this.props.chests[e.target.id]});
        console.log(e.target.id)
    }

    searchChests = (e) => {
        e.preventDefault();
    }

    goBack = () => {
        this.setState({chestSelected: false});
    }

    filterChests = (e) => {
        this.props.chests.map(chest => {
            if(chest.name.includes(e.target.name)){
                
            }
        })
        
    }
    reducedChests () {
        let arr = [];
        for(let i = 0; i < 11; i++){
            arr.push(this.props.chests[i]);
            this.setState({reducedChests: arr});
        }
    }
    
    
    render() {
        if(this.state.chestSelected === true){
            return (
                <SelectedChest 
                    chest={this.state.chest}
                    goBack={this.goBack}
                    chestSelected={this.state.chestSelected}
                    chestIdName={this.state.chestIdName}
                />
            )
        }
        else{
            return (
                <div className='chest-main'>
                    <h1>Chests</h1>

                    {
                        this.state.reducedChests.map( (chest, id) => {
                            return(
                                <div>
                                    <img src={`http://www.clashapi.xyz/images/chests/${this.state.chestIdName[chest.order]}.png`} alt='' />
                                    <div className='chest-list'>
                                        <div id={id}>{chest.name}</div>
                                        <div id={id}>Total Cards: {chest.cards.number} <br />{chest.cards.minEpic} Minimum Epic Cards <br /> {chest.cards.minRare} Minimum Rare Cards </div>
                                        <div id={id}>Gold: {chest.gold.max} Maximum / {chest.gold.min} Minimum</div>
                                        <div id={id}>Unlock: {chest.unlock.gemCost} Gems or {chest.unlock.time} Minutes</div>
                                    </div>
                                </div>
                            )
                                
                        })
                    }
                </div>
            );
        }

    }
}

export default Chests;


                    // {/* {/* <Search 
                    //     submit={this.searchChests}
                    //     /> */}
                    //     { 
                            //     this.props.chests.map( (chest, id) => 
                            //         <div
                            //         id={id}
                            //         className={chest.idName}
                            //         key={chest.idName}
                            //         onClick={this.selectChest}
                            //         >
                            //             {chest.name}
                            //          </div>
                            //     )
                            // } */}