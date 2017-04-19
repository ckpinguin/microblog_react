import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const initialBlogEntries = [
    {
        id: 0,
        title: 'Testentry',
        text: 'Just a little\n test',
        image: 'http://random.cat/i/8IcD0.jpg',
        date: null,
        tags: []
    },
    {
        id: 1,
        title: 'another one',
        text: 'Cats always work :-)',
        image: 'http://random.cat/i/061_-_qxHYGTX.gif',
        date: null,
        tags: []
    }
];

// const title = 'CK\'s microblog!';

ReactDOM.render(
    <App initialBlogEntries={initialBlogEntries} /> ,
    document.getElementById('root')
);