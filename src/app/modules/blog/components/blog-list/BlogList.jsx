import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllEntries } from '../../selectors';
import BlogItem from '../blog-item/BlogItem';
import { removeEntry, setCurrentEntryById } from '../../actions';

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
                      {itemList}
                  </div>
                : <p>No blog entries</p>}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        entries: getAllEntries(state)
    };
};

// Alternative would be:  bindActionCreators(Actions, dispatch);
// where all actions would be bound and available (performance-loss?)
const mapDispatchToProps = {
    deleteEntry: removeEntry,
    setCurrent: setCurrentEntryById
};

export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps,
)(BlogList));

// default behaviour without args would be that `dispatch`
// is injected to be available as a prop:
// connect()(BlogList)