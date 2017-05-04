import { LOAD_BLOG_ENTRIES, SAVE_BLOG_ENTRY, DELETE_BLOG_ENTRY } from '../actions';

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

const blogEntriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
    case LOAD_BLOG_ENTRIES:
        console.log('reducer LOAD_BLOG_ENTRIES called');
        return state;
    case SAVE_BLOG_ENTRY:
        console.log('reducer INSERT_BLOG_ENTRY called with ', action.entry);
        let entry = action.entry;
        // console.log('previous state is: ', state);
        if (!entry.id) // new blog entry?
            entry.id = state[state.length-1].id + 1;
        // console.log('id is now: ', entry.id);
        // console.log('state will be: ', [...state, entry]);
        return [
            ...state,
            entry
        ];
    case DELETE_BLOG_ENTRY:
        console.log('reducer DELETE_BLOG_ENTRY called with ', action.id);
        const newState = {};
        return newState;
    default:
        return state;
    }
};
export default blogEntriesReducer;