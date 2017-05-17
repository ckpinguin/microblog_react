import React from 'react';

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import blog from '../..';

let BlogList = ({ entries, deleteEntry, setCurrent }) => {
    let itemList = [];
    const BlogItem = blog.components.BlogItem;
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
                      {itemList}
                  </div>
                : <p>No blog entries</p>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        entries: blog.selectors.getAllEntries(state)
    };
};

// Alternative would be:  bindActionCreators(Actions, dispatch);
// where all actions would be bound and available (performance-loss?)
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(blog.actions, dispatch);
};

export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps,
)(BlogList));

// default behaviour without args would be that `dispatch`
// is injected to be available as a prop:
// connect()(BlogList)