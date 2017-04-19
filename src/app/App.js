import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import logo from './logo.svg';

import './App.css';

import Layout from './layout/Layout';
import BlogList from './blog-list/BlogList';
import BlogForm from './blog-form/BlogForm';

export default class App extends Component {
    static propTypes = {
        title:          PropTypes.string.isRequired,
        initialBlogEntries:    PropTypes.array
    };
    
    static defaultProps = {
        title: 'CK\'s microblog!',
        initialBlogEntries: [{}] // this also gets evaluated with blogEntries!
    };

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.newEntry = {
            id: this.state.blogEntries[this.state.blogEntries.length-1].id+1,
            title: '',
            text: '',
            image: ''
        };
    }

    getInitialState () {
        return {
            blogEntries: this.props.initialBlogEntries
        };
    }

    saveBlogEntry(e) {
        console.log('Saving entry: ', e);
        const entry = e;
        this.setState(
            {
                blogEntries: [...this.state.blogEntries, entry]
            }
        );
    }

    render() {
        return (
            <div className="container">
                {/* Just mimicking angular templating with the 
                children, more explicit props would also work here */}
                <Layout>
                    <h1>{this.props.title}</h1>
                    <BlogForm newEntry={this.newEntry} onSubmit={ e => this.saveBlogEntry(e) } />
                    <p>Attention item</p>
                    <BlogList blogEntries={this.state.blogEntries} />
                </Layout>
            </div>
        );
    } 
}

