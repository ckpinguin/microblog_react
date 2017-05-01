import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';

import Layout from './layout/Layout';
import BlogList from './blog-list/BlogList';
import BlogForm from './blog-form/BlogForm';

import configureStore from './store/configureStore';
import { loadBlogEntries } from './actions';

const store = configureStore();
let initialBlogEntries;
store.dispatch(loadBlogEntries());
((e) => {initialBlogEntries = e;});

export default class App extends Component {
    static defaultProps = {
        title: 'CK\'s microblog!',
    };

    constructor(props) {
        super(props);
        this.state = 
            {
                blogEntries: initialBlogEntries,
                newEntry: {
                    title: '',
                    text: '',
                    image: ''
                }
            };
    }

    saveBlogEntry(e) {
        console.log('Saving entry: ', e);
        const entry = e;
        entry.id = this.state.blogEntries[this.state.blogEntries.length-1].id + 1;
        this.setState(
            {
                blogEntries: [...this.state.blogEntries, entry],
                newEntry: {
                    title: '',
                    text: '',
                    image: ''
                }
            },
            () => {console.log('top new state: ', this.state);}
        );
        
    }

    render() {
        console.log('store.getState().xyz: ',store.getState() );
        return (
            <div className="container">
                {/* Just mimicking angular templating with the 
                children, more explicit props would also work here */}
                <Layout>
                    <h1>{this.props.title}</h1>
                    <BlogForm newEntry={this.state.newEntry} onSubmit={ e => this.saveBlogEntry(e) } />
                    <p>Attention item</p>
                    <BlogList blogEntries={store.getState().blogEntries} />
                </Layout>
            </div>
        );
    } 
}

