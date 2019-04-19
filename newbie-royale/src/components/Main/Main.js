import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Cards from '../Cards/Cards'
import Chests from '../Chests/Chests'
import Arenas from '../Areans/Arenas'
import Leagues from '../Leagues/Leagues'

class Main extends Component {
    render() {
        return (
            <main>
                <Route exact path='/' component={Home} />
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
            </main>
        );
    }
}

export default Main;