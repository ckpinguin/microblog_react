import React from 'react';
import PropTypes from 'prop-types';

import './BlogItem.css';

const BlogItem = ({item, onDelete, onEdit}) => {
    return (
        <div className="BlogItem">
            <hr />
            {item.image && <div className="blog-image">
                <img src={item.image} alt={item.title}/>
            </div>}
            <div className="blog-summary">
                <h2>
                    {item.title}<br />
                    <div className="fa fa-trash"
                        onClick={() => onDelete(item.id)}/>
                    <div className="fa fa-edit"
                        onClick={() => onEdit(item.id)} />
                </h2>
                <p>{item.text}</p>
            </div>
        </div>
    );
};
BlogItem.propTypes = {
    item:   PropTypes.object.isRequired
};
export default BlogItem;