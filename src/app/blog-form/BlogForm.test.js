import React from 'react';
import ReactDOM from 'react-dom';
import BlogForm from './BlogForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogForm />, div);
});
