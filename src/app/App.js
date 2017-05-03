import React, { Component } from 'react';

import Layout from './components/layout/Layout';
import BlogList from './containers/blog-list/BlogList';
// import BlogForm from './components/blog-form/BlogForm';
import BlogFormContainer from './containers/blog-form-container/BlogFormContainer';

import configureStore from './store/configureStore';

// import logo from './logo.svg';
import './App.css';

const store = configureStore();

export default class App extends Component {
    static defaultProps = {
        title: 'CK\'s microblog!',
    };

    render() {
        console.log('store.getState(): ',store.getState() );
        return (
            <div className="container">
                {/* Just mimicking angular templating with the 
                children, more explicit props would also work here */}
                <Layout>
                    <h1>{this.props.title}</h1>
                    <BlogFormContainer
                        // resetForm={ Actions.resetNewBlogEntry }
                        // insertBlogEntry={ Actions.insertBlogEntry }
                        // onSubmit={ Actions.insertBlogEntry }
                    />
                    <p>Attention item</p>
                    <BlogList />
                </Layout>
            </div>
        );
    } 
}