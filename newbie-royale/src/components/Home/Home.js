import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
import Chests from '../Chests/Chests'
import Arenas from '../Areans/Arenas'
import Leagues from '../Leagues/Leagues'


class Home extends Component {
    render() {
        return (
            <div className='home-main'>
                <ul>
                <li><Link to='/Cards'>Cards</Link></li>
                <li><Link to='/Chests'>Chests</Link></li>
                <li><Link to='/Arenas'>Arenas</Link></li>
                <li><Link to='/Leagues'>Leagues</Link></li>
                </ul>
                <Route 
                    path='/Cards' 
                    render={() => 
                    <Cards 
                        cards={this.props.cards}
                />} />
                <Route 
                    path='/Chests' 
                    render={() => 
                    <Chests
                        chests={this.props.chests}
                />} />
                <Route 
                    path='/Arenas' 
                    render={() => 
                    <Arenas 
                        arenas={this.props.arenas}
                />} />
                <Route 
                    path='/Leagues' 
                    render={() => 
                    <Leagues 
                        leagues={this.props.leagues}
                />} />
            </div>
        );
    }
}

export default Home;