import React from 'react';
import _ from 'lodash';

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
        console.log('this.props:', this.props);
        const { match } = this.props;
        

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
                    <h1>Attention item:</h1>
                    <p>path: {match.path}</p>
                    <p>params: {_.map(match.params, e => e)}</p>
                </div>
            </div>
            <div className="listContent">
                <BlogList />
            </div>
        </div>
        );
    }
}