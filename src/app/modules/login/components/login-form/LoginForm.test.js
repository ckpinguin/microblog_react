import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

it('renders without crashing', () => {
    const onSubmit = () => {
        console.log('TEST: submit form');
    };
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm onSubmit={onSubmit}  />, div);
});
