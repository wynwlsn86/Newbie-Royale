import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
          // <div className='nav'>
          //   <ul>
          //     <li><Link to='/'>Home</Link></li>
          //     <li><Link to='/Cards'>Cards</Link></li>
          //     <li><Link to='/Chests'>Chests</Link></li>
          //     <li><Link to='/Arenas'>Arenas</Link></li>
          //     <li><Link to='/Leagues'>Leagues</Link></li>
          //   </ul>
          // </div>
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
              <Link className='navbar-item is-size-3'
                    to='/'>Home</Link>
              <Link className='navbar-item is-size-3'
                    to='/Cards'>Cards</Link>
              <Link className='navbar-item is-size-3'
                    to='/Chests'>Chests</Link>
              <Link className='navbar-item is-size-3'
                    to='/Arenas'>Arenas</Link>
              <Link className='navbar-item is-size-3' 
                    to='/Leagues'>Leagues</Link>
              </div>
            </nav>
        );
    }
}

export default Nav;