import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialBlogEntries = [
    {
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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App initialBlogEntries={initialBlogEntries} />, div);
});
