import React from 'react';
import ReactDOM from 'react-dom';
import EditBlogEntryFormContainer from './EditBlogEntryFormContainer';

it('renders without crashing', () => {
    const newEntry = {
        id: undefined,
        title: '',
        text: '',
        image: ''
    };
    const onSubmit = () => {
        console.log('TEST: submit form');
    };
    const div = document.createElement('div');
    ReactDOM.render(<EditBlogEntryFormContainer newEntry={newEntry} onSubmit={onSubmit} />, div);
});
