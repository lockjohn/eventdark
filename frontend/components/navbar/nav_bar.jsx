import React from 'react';
import NavBarGreeting from './nav_bar_greeting';
import { Link } from 'react-router-dom';

//will render header with navigation, search, event link, greeting vs session-forms

const NavBar = (props) => (
    <header className="nav-header"> 
      <nav className="nav">
        <div className="nav-left">
            <Link className="logo" to="/">eventDark</Link>
            <div className="search-bar">
                
            </div>
        </div> 
        <div className="nav-right">
            <div className="nav-link media-nav">
                <Link className="nav-link-item" to="/"> BROWSE EVENTS</Link>
            </div>
            <div className="nav-link dropdown-trip">
                <NavBarGreeting 
                currentUser={props.currentUser}
                logout={props.logout} />
            </div>
                <div className="nav-link media-nav">
                    <Link className="nav-link-item" to="/events/new"> <span className="create-event">Create Event</span> </Link>
                {/* <a className="create-event">CREATE EVENT</a> */}
            </div>
        </div>
      </nav>
    </header>
)

export default NavBar;