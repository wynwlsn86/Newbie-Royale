import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
import Chests from '../Chests/Chests'
import Arenas from '../Areans/Arenas'
import Leagues from '../Leagues/Leagues'


class Home extends Component {
    render() {
        return (
            <div>
                {/* button is-link is-large is-fullwidth is-info */}


                <div className=" tile is-ancestor">
  <div className=" tile is-parent is info link-margin">
    <article className=" tile  is-child box is-info">
    <Link  className='white-text' to='/Cards'>Cards</Link>
    </article>
  </div>
  <div className="tile is-parent link-margin">
    <article className="tile is-child box">
    <Link  className='white-text' to='/Chests'>Chests</Link>
    </article>
  </div>
  

</div>
<div className="tile is-ancestor">
  <div className="tile is-parent link-margin">
    <article className="tile is-child box">
    <Link  className='white-text' to='/Arenas'>Arenas</Link>
    </article>
  </div>
  <div className="tile is-parent link-margin">
    <article className="tile is-child box">
    <Link  className='white-text' to='/Leagues'>Leagues</Link>
    </article>
  </div>
  
</div>








             
                {/* <ul>
                <div className="tile is-vertical is-8"><Link  to='/Cards'>Cards</Link></div>
                <Link className="home-buttons" to='/Chests'>Chests</Link>
                <Link className="home-buttons" to='/Arenas'>Arenas</Link>
                <Link className="home-buttons" to='/Leagues'>Leagues</Link>
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
                />} /> */}
            </div>
        );
    }
}

export default Home;