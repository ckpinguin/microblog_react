import React from 'react';

import './BlogItem.css';

export default function BlogItem({item}) {
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
}
