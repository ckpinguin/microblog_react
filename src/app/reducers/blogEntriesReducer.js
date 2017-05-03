import { LOAD_BLOG_ENTRIES, INSERT_BLOG_ENTRY } from '../actions';

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

export default function blogEntriesReducer(state = initialEntries, action) {
    switch (action.type) {
    case LOAD_BLOG_ENTRIES:
        console.log('reducer LOAD_BLOG_ENTRIES called');
        return state;
    case INSERT_BLOG_ENTRY:
        console.log('reducer INSERT_BLOG_ENTRY called with ', action.entry);
        let entry = action.entry;
        entry.id = state[state.length-1].id + 1;
        console.log('id is now: ', entry.id);
        console.log('should return ', state.concat(entry));
        return state.concat(entry);
    default:
        return state;
    }
}