import React from 'react';
import PropTypes from 'prop-types';

import './BlogItem.css';

const BlogItem = ({item}) => {
    return (
        <div className="BlogItem">
            <div className="blog-image">
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="blog-summary">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        </div>
    );
};
BlogItem.propTypes = {
    item:   PropTypes.object.isRequired
};
export default BlogItem;