import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
          <div className='nav'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Cards'>Cards</Link></li>
              <li><Link to='/Chests'>Chests</Link></li>
              <li><Link to='/Arenas'>Arenas</Link></li>
              <li><Link to='/Leagues'>Leagues</Link></li>
            </ul>
          </div>
        );
    }
}

export default Nav;