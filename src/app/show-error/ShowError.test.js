import React from 'react';
import ReactDOM from 'react-dom';
import ShowError from './ShowError';

it('renders without crashing', () => {
    const controlPath='';
    const div = document.createElement('div');
    ReactDOM.render(<ShowError controlPath={controlPath} />, div);
});
