
import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <footer className="footer-container">
            <nav className="footer-link-container">
                <a href="https://github.com/lockjohn/eventdark">
                    <i className="fa fa-github fa-2x footer-icon" aria-hidden="true" />
                </a>
                <a href="">
                    <i
                        className="fa fa-linkedin-square fa-2x footer-icon"
                        aria-hidden="true"
                    />
                </a>
            </nav>
        </footer>
    );
};