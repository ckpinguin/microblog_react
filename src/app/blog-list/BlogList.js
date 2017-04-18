import React from 'react';
import PropTypes from 'prop-types';

import './BlogList.css';

import BlogItem from '../blog-item/BlogItem';

BlogList.proptypes = {
    blogEntries: PropTypes.array.isRequired
};
BlogList.defaultProps = {

};

export default function BlogList({blogEntries}) {
    let itemList;
    if (blogEntries) {
        itemList = blogEntries.map((entry) => {
            return <BlogItem key={entry.id} item={entry}>{entry}</BlogItem>;
        });
    }

    return (
        <div className="BlogList">
            <p>
                List of blog entries:
            </p>
            {itemList ? itemList : null}
        </div>
    );
}

