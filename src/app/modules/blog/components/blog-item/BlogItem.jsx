import React from 'react';
import PropTypes from 'prop-types';

import './BlogItem.css';

const BlogItem = ({item, onDelete, onEdit, ...rest}) => {
    if (!item.active) {
        return null;
    }
    return (
        <div className="BlogItem">
            <hr />
            {item.image && <div className="blog-image">
                <img src={`/images/${item.image}`} alt={item.title}/>
            </div>}
            <div className="blog-summary">
                <h2>
                    {item.title}<br />
                    <div className="fa fa-trash"
                        onClick={() => onDelete(item.id)}/>
                    <div className="fa fa-edit"
                        onClick={() => onEdit(item.id) } />
                </h2>
                <p>{item.text}</p>
            </div>
        </div>
    );
};
BlogItem.propTypes = {
    item:       PropTypes.object.isRequired,
    onDelete:   PropTypes.func.isRequired,
    onEdit:     PropTypes.func.isRequired
};
export default BlogItem;