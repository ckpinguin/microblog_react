import React from 'react';

import BlogItem from '../blog-item/BlogItem';

import './BlogList.css';

export default function BlogList({blogEntries}) {
    const itemList = blogEntries.map((entry) => {
        return <BlogItem item={entry}>{entry.title}</BlogItem>;
    });
    
    return (
        <div className="BlogList">
            <p>List of blog entries:</p>
            <ul>
                {itemList}
            </ul>
        </div>
    );
}

BlogList.proptypes = {
    blogEntries: React.PropTypes.array.isRequired
};
