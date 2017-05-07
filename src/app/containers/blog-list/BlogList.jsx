import React from 'react';

import { connect } from 'react-redux';

import * as Actions from '../../actions';

import BlogItem from '../../components/blog-item/BlogItem';

let BlogList = ({ entries, deleteEntry, setCurrent }) => {
    let itemList = [];

    if (entries != null) {
        itemList = entries.map((entry) => {
            return (
                <BlogItem
                    key={entry.id}
                    item={entry}
                    onDelete={deleteEntry}
                    onEdit={setCurrent}>
                    {entry}
                </BlogItem>
            );
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

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(BlogList);