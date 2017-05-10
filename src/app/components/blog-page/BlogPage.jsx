import React from 'react';
import PropTypes from 'prop-types';

import EditBlogEntryFormContainer from '../edit-blog-entry-form-container/EditBlogEntryForm';
import BlogList from '../blog-list/BlogList';

import './BlogPage.css';

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.title = 'BlogEditing';
    }

    render() {
        return (
        <div className="content">
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
            <div className="footer">
                <p>© Christof Kälin</p>
            </div>
        </div>
    );
    }
}