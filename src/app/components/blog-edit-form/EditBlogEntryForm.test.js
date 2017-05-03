import React from 'react';
import ReactDOM from 'react-dom';
import EditBlogEntryForm from './EditBlogEntryForm';

it('renders without crashing', () => {
    const onSubmit = () => {
        console.log('TEST: submit form');
    };
    const div = document.createElement('div');
    ReactDOM.render(<EditBlogEntryForm onSubmit={onSubmit}  />, div);
});
