import React from 'react';

import './BlogItem.css';

export default function BlogItem({item}) {
    return (
        <div className="BlogItem">
            {item.title}
        </div>
    );
}
