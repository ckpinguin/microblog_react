import React from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import * as Actions from '../../actions';

import BlogItem from '../../components/blog-item/BlogItem';

let BlogList = ({ entries, deleteEntry, setCurrent }) => {
    let itemList = [];

    if (entries) {
        itemList = entries.map((entry) => {
            if (entry !== null) {
                return (
                    <BlogItem
                        key={entry.id}
                        item={entry}
                        onDelete={deleteEntry}
                        onEdit={setCurrent}>
                        {entry}
                    </BlogItem>
                );
            } else {
                return null;
            }
        });
    }

    return (
        <div className="BlogList">
            {itemList 
                ? <div>
                      <p>List of blog entries:</p>
                      {itemList}
                  </div>
                : <p>No blog entries</p>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        entries: state.blog.entries
    };
};

const mapDispatchToProps = {
    deleteEntry: Actions.removeBlogEntry,
    setCurrent: Actions.setCurrentBlogEntryById
};

export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps,
)(BlogList));

// default behaviour without args would be that `dispatch`
// is injected to be available as a prop:
// connect()(BlogList)