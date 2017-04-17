import React from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import './Layout.css';

import NavBar from '../navbar/NavBar';

export default function Layout({children}) {
    return (
        <div className="Layout">
            <NavBar />
            <div className="title">
                {children[0]}
            </div>
            <div className="mainContent">
                {children[1]}
            </div>
            <div className="jumbotron">
                <div className="attentionItem">
                    {children[2]}
                </div>
            </div>
            <div className="listContent">
                {children[3]}
            </div>
            <div className="footer">
                <p>© Christof Kälin</p>
            </div>
        </div>
    );
}

Layout.propTypes = { 
    children:       React.PropTypes.array.isRequired,
};
