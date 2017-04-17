import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogEntries: props.blogEntries
        };
    }

    render() {
        return (
            <div>
                <Layout title={this.props.title} blogEntries={this.state.blogEntries} />
            </div>
        );
    } 
}

App.propTypes = {
    blogEntries: React.PropTypes.array
};

