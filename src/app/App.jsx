import React, {Component} from 'react';
import { connect } from 'react-redux';

import Layout from './components/layout/Layout';
import BlogList from './containers/blog-list/BlogList';
import EditBlogEntryFormContainer from './containers/blog-edit-form-container/EditBlogEntryFormContainer';

// import logo from './logo.svg';
import './App.css';

const appTitle = 'CK\'s microblog!';
class App extends Component {  
    componentWillReceiveProps(nextProps) {
        // console.log('Store updated: ', nextProps);
    }
    render() {
        return (
            <div className="container">
                {/* Just mimicking angular templating with the 
                children, more explicit props would also work here */}
                <Layout>
                    <h1>{appTitle}</h1>
                    <EditBlogEntryFormContainer />
                    <p>Attention item</p>
                    <BlogList />
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    blog: state.blog
});

export default connect(
     mapStateToProps,
     undefined,
)(App);
