import React from 'react';
import ReactDOM from 'react-dom';
import BlogItem from './BlogItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogItem />, div);
});
