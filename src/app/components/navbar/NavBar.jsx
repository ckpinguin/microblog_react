import React from 'react';

import './NavBar.css';

const NavBar = () => (
    <div className="NavBar">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-left">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Login">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default NavBar;