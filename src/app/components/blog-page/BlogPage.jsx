import React from 'react';
// import PropTypes from 'prop-types';

import EditBlogEntryFormContainer from '../../containers/edit-blog-entry-form-container/EditBlogEntryFormContainer';
import BlogList from '../../containers/blog-list/BlogList';

import './BlogPage.css';

export default class BlogPage extends React.Component {
    title = 'Blog';
    componentDidMount() {
        document.title = this.title;
    }

    render() {
        return (
        <div>
            <div className="title">
                <h1>{this.title}</h1>
            </div>
            <div className="mainContent">
                <EditBlogEntryFormContainer />
            </div>
            <div className="jumbotron">
                <div className="attentionItem">
                    <p>Attention item</p>
                </div>
            </div>
            <div className="listContent">
                <BlogList />
            </div>
        </div>
        );
    }
}