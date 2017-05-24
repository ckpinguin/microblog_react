import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import blog from '../..';

import './BlogPage.css';

class BlogPage extends React.Component {
    title = 'Blog';

    componentDidMount() {
        document.title = this.title;
    }

    render() {
        const EditEntryFormContainer = blog.components.EditEntryFormContainer;
        const BlogList = blog.components.BlogList;
        console.log('BlogPage props: ', this.props);
        const { createNewEntry, match } = this.props;
        return (
        <div>
            <div className="title">
                <h1>{this.title}</h1>
            </div>
            <div className="mainContent">
                <Route
                    path={`${match.url}/:id`}
                    component={EditEntryFormContainer}
                />
                <EditEntryFormContainer/>
                <button onClick={createNewEntry} className="btn">Create New Entry</button>
            </div>
            <div className="jumbotron">
                <div className="attentionItem">
                    <h1>Attention item:</h1>
                    <p>url: {match.url}</p>
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

BlogPage.propTypes = {
    // injected by mapStateToProps/mapDispatchToProps:
    createNewEntry:         PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => {
    console.log('blog.actions: ', blog.actions);
    return bindActionCreators(blog.actions, dispatch);
};

// Some advice was, that explicit literal object shorthand binding
// is better to be more redux-agnostic
export default connect(
     null,
     mapDispatchToProps,
)(BlogPage);
