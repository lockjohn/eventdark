import React from 'react';
import { Link } from 'react-router-dom';

const NavBarGreeting = ({ currentUser, logout }) => {
    
    const greeting = () => (
        <div>
            <div className="dropdown">
                <a className="header-name">
                    <img className="avatar" src={window.images.avatar}/>
                    <span className="header-name name"> {currentUser.username}</span>
                    <i className="header-name arrow"></i>
                </a>
            </div>
            <div className="dropdown-list">
                <ul>
                    <li className="dropdown-list-item">BROWSE EVENTS</li>
                    <li className="dropdown-list-item">TICKETS</li>
                    <li className="dropdown-list-item"> ORGANIZER PROFILE</li>
                    <li className="dropdown-list-item">  <span onClick={logout}> LOG OUT</span> </li>
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