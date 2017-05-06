import { ADD_BLOG_ENTRY, UPDATE_BLOG_ENTRY, REMOVE_BLOG_ENTRY }
    from '../../actions';

import entry from './entry';

import initialBlogState from './initialBlogState';

// TODO: remove side-effects (console.log's)
const entries = (state = initialBlogState.entries, action) => {
    // console.log('entries state: ', state);
    switch (action.type) {
    case ADD_BLOG_ENTRY:
        //console.log(`reducer ${action.type} called with: `, action.entry);
        return state.concat(action.entry);
    case 'UPDATE_BLOG_ENTRY_OLD':
        console.log(`reducer ${action.type} called with: `, action.entry);
        console.log('constructing: ', [
            [state.filter(e => e.id !== action.entry.id).concat(action.entry)]
        ]);
        // const filteredEntries = state.entries.filter(e => e.id !== action.entry.id);
        // const updatedEntries = filteredEntries.concat([action.entry]);
        // const updatedEntries = [ ...filteredEntries, action.entry ];
        return {
            ...state,
            // entries: updatedEntries
        };
    case UPDATE_BLOG_ENTRY:
        return state.map(t => entry(t, action));
    case REMOVE_BLOG_ENTRY:
        console.log(`reducer ${action.type} called`);
        return {
            ...state,
            // entries: state.entries.filter((e) => e.id !== action.id)
        };
    default:
        return state;
    }
};
export default entries;