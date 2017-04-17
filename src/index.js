import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const blogEntries = [{
        id: 0,
        title: 'Testentry',
        text: 'Just a little\n test',
        image: 'http://logos.com/media/VerseOfTheDay/768x432/2016-12-27.png',
        date: null,
        tags: []
    },
    {
        id: 1,
        title: 'another one',
        text: 'Just another dumb test',
        image: 'http://logos.com/media/VerseOfTheDay/768x432/2016-12-28.png',
        date: null,
        tags: []
    }
];

const title = 'CK\'s microblog!';

ReactDOM.render(
    <App title={title} blogEntries={blogEntries} /> ,
    document.getElementById('root')
);