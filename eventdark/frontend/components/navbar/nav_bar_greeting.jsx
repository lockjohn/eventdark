import React from 'react';
import { Link } from 'react-router-dom';

const NavBarGreeting = ({ currentUser, logout }) => {
    
    const greeting = () => (
        <div className="dropdown-parent">
            <div className="dropdown">
                <a className="header-name">
                    <img className="avatar" src={window.images.avatar}/>
                    <span className="header-name name"> {currentUser.username}</span>
                    <i className="fa fa-angle-down arrow"></i>
                </a>
            
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">Browse Events</li>
                    <li className="dropdown-list-item">Tickets</li>
                    <li className="dropdown-list-item"> Organizer Profile</li>
                    <li className="dropdown-list-item">  <span onClick={logout}> Log Out</span> </li>
                </ul>
            
            </div>
        </div>
    );

    const sessionLink = () => (
        <div className="nav-link"> 
            <Link to="/signin">SIGN IN</Link>
        </div>
    );

    if (currentUser) {
        return greeting();
    } else {
        return sessionLink();
    }
};

export default NavBarGreeting;