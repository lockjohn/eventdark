import React from 'react';
import { Link } from 'react-router-dom';

const NavBarGreeting = ({ currentUser, logout }) => {
    
    const greeting = () => (
        <div className="dropdown-parent">
            <div className="dropdown">
                <a className="header-name">
                    <img className="avatar" src={currentUser.userImgUrl}/>
                    <span className="header-name name"> {currentUser.username}</span>
                    <i className="fa fa-angle-down arrow"></i>
                </a>
            
                <ul className="dropdown-list">
                    <li className="dropdown-list-item"><Link to="/">Browse Events</Link></li>
                    <li className="dropdown-list-item"><Link to="/events/new">Create Event</Link></li>
                    <li className="dropdown-list-item"><Link to="/">Tickets</Link></li>
                    <li className="dropdown-list-item">  <a onClick={logout}>Log Out</a> </li>
                </ul>
            
            </div>
        </div>
    );

    const sessionLink = () => (
        <div className="nav-link"> 
            <Link className="nav-link-item" to="/login">Sign In</Link>
        </div>
    );

    if (currentUser) {
        return greeting();
    } else {
        return sessionLink();
    }
};

export default NavBarGreeting;