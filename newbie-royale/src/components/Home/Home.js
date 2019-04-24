import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



class Home extends Component {
    render() {
        return (
            <div className='home-bg'>
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
            </div>
        );
    }
}

export default Home;