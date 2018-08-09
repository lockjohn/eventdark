import React from 'react';
import NavBarGreeting from './nav_bar_greeting';

//will render header with navigation, search, event link, greeting vs session-forms

const NavBar = (props) => (
    <header className="nav-header"> 
      <nav className="nav">
        <div className="nav-left">
            <a className="logo">eventDark
            </a>
            <div className="search-bar">
                
            </div>
        </div> 
        <div className="nav-right">
            <div className="nav-link">
                <a href="">BROWSE EVENTS</a>
            </div>
            <div className="nav-link">
                <NavBarGreeting 
                currentUser={props.currentUser}
                logout={props.logout} />
            </div>
            <div className="nav-link">
                <a href="">CREATE EVENT</a>
            </div>
        </div>
      </nav>
    </header>
)

export default NavBar;