import { LOAD_BLOG_ENTRIES } from '../actions';

const initialEntries = [
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

export default function blogEntries(state = initialEntries, action) {
    switch (action.type) {
    case LOAD_BLOG_ENTRIES:
        return state;
    default:
        return state;
    }
}