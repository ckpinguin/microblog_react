import React from 'react';
import PropTypes from 'prop-types';

import Blog from '../..';

import './BlogItem.css';

const BlogItem = ({item, onDelete, onEdit, ...rest}) => {
    const EditEntryFormContainer = Blog.components.EditEntryFormContainer;
    return (
        <div className="BlogItem">
            <hr />
            <EditEntryFormContainer
                key={item.id}
                form={`EditEntryForm_${item.id}`}
                entry={item}
            />
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