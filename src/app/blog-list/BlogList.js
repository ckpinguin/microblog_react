import React from 'react';

import './BlogList.css';

import BlogItem from '../blog-item/BlogItem';

export default function BlogList({blogEntries}) {
    const itemList = blogEntries.map((entry) => {
        return <BlogItem key={entry.id} item={entry}>{entry}</BlogItem>;
    });
    
    return (
        <div className="BlogList">
            <p>
                List of blog entries:
            </p>
            {itemList}
        </div>
    );
}

BlogList.proptypes = {
    blogEntries: React.PropTypes.array.isRequired
};
