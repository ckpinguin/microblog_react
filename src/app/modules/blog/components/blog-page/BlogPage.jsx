import React from 'react';

import blog from '../..';

import './BlogPage.css';

export default class BlogPage extends React.Component {
    title = 'Blog';
    componentDidMount() {
        document.title = this.title;
    }

    render() {
        const EditEntryFormContainer = blog.components.EditEntryFormContainer;
        const BlogList = blog.components.BlogList;
        return (
        <div>
            <div className="title">
                <h1>{this.title}</h1>
            </div>
            <div className="mainContent">
                <EditEntryFormContainer />
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