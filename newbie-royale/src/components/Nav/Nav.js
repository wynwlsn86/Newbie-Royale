import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
          <nav class="nav-bar is-link navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
              <img className='navbar-brand' src='https://clashroyale.com/uploaded-images-blog/_232x109_crop_center-center_90/logo-1.png?mtime=20180403175110' alt='' />
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