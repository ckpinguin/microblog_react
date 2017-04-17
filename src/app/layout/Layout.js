import React from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BlogList from '../blog-list/BlogList';

import './Layout.css';

export default function Layout({title, blogEntries}) {
    return (
        <div className="Layout">
            <NavBar />
            <div className="title">
                <h1>{title}</h1>    
            </div>
            <div className="mainContent"></div>
            <div className="jumbotron">
                <div className="focusItem"></div>
            </div>
            <div className="listContent">
                <BlogList blogEntries={blogEntries} />
            </div>
            <div className="footer"></div>
        </div>
    );
}

Layout.propTypes = { 
    title:       React.PropTypes.string.isRequired,
    blogEntries: React.PropTypes.array.isRequired
};
