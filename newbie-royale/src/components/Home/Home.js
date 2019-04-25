import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



class Home extends Component {
    render() {
        return (
            <div className='home-bg'>
                <div className=" tile is-ancestor">
                  <div className=" tile is-parent is info link-margin">
                    <Link  className='white-text tile-length' to='/Cards'>
                      <article className=" tile  is-child box is-info">
                        Cards
                      </article>
                  </Link>
                  </div>
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Chests'>
                      <article className="tile is-child box">
                        Chests
                      </article>
                    </Link>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Arenas'>
                      <article className="tile is-child box">
                        Arenas
                      </article>
                    </Link>
                  </div>
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Leagues'>
                      <article className="tile is-child box">
                        Leagues
                        </article>
                    </Link>
                  </div>
                </div>
            </div>
        );
    }
}

export default Home;