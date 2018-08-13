import React from 'react';
import NavBarGreeting from './nav_bar_greeting';
import { Link } from 'react-router-dom';

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
            <div className="nav-link media-nav">
                <a href="">BROWSE EVENTS</a>
            </div>
            <div className="nav-link dropdown-trip">
                <NavBarGreeting 
                currentUser={props.currentUser}
                logout={props.logout} />
            </div>
                <div className="nav-link media-nav">
                    <Link to="/events/new"> <span className="create-event">Create Event</span> </Link>
                {/* <a className="create-event">CREATE EVENT</a> */}
            </div>
        </div>
      </nav>
    </header>
)

export default NavBar;