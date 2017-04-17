import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './NavBar.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="title"></div>
                <div className="mainContent"></div>
                <div className="jumbotron">
                    <div className="focusItem"></div>
                </div>
                <div className="listContent"></div>
                <div className="footer"></div>
            </div>
        );
    }
}