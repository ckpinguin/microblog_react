import { SET_CURRENT_BLOG_ENTRY, UNSET_CURRENT_BLOG_ENTRY, SAVE_BLOG_ENTRY, SAVE_BLOG_ENTRY_SUCCESS, DELETE_BLOG_ENTRY } from '../actions';

const initialBlogState = {
    entries: [
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
    ],
    currentEntry: undefined
};

// TODO: remove side-effects (console.log's)
const blogReducer = (state = initialBlogState, action) => {
    switch (action.type) {
    case SET_CURRENT_BLOG_ENTRY:
        console.log('reducer SET_CURRENT_BLOG_ENTRY called: ',action.entry );
        return {
            ...state,
            currentEntry: action.entry
        };
    case UNSET_CURRENT_BLOG_ENTRY:
        console.log('reducer UNSET_CURRENT_BLOG_ENTRY called: ',action.entry );
        return {
            ...state,
            currentEntry: undefined
        };
    case SAVE_BLOG_ENTRY:
        console.log('reducer INSERT_BLOG_ENTRY called with ', action.entry);
        let entry = action.entry;
        if (!entry.id) // new blog entry?
            entry.id = state.entries[state.entries.length-1].id + 1;
        return {
            ...state,
            entries: [...state.entries, entry ]
        };
    case DELETE_BLOG_ENTRY:
        console.log('reducer DELETE_BLOG_ENTRY called with ', action);
        return {
            ...state,
            entries: state.entries.filter((e) => e.id !== action.id)
        };
    default:
        return state;
    }
};
export default blogReducer;