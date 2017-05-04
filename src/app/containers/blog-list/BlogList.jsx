import React from 'react';

import { connect } from 'react-redux';

import * as Actions from '../../actions';

import BlogItem from '../../components/blog-item/BlogItem';

let BlogList = ({ blogEntries }) => {
    let itemList;

    if (blogEntries) {
        itemList = blogEntries.map((entry) => {
            return <BlogItem key={entry.id} item={entry}>{entry}</BlogItem>;
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

const mapStateToProps = ({blogEntries}) => {
    return {
        blogEntries
    };
};

const mapDispatchToProps = {
    load: Actions.loadBlogEntries
};

// This injects actions bound to props and initializes local state
export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(BlogList);