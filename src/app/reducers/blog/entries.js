import { ADD_BLOG_ENTRY, UPDATE_BLOG_ENTRY, REMOVE_BLOG_ENTRY }
    from '../../actions';

import entry from './entry';

import initialBlogState from './initialBlogState';

const entries = (state = initialBlogState.entries, action) => {
    switch (action.type) {
    case ADD_BLOG_ENTRY:
        return [
            ...state,
            entry(undefined, action)
        ];
    case UPDATE_BLOG_ENTRY:
        return state.map(e => entry(e, action));
    case REMOVE_BLOG_ENTRY:
        return state.filter(e => entry(e, action));        
    default:
        return state;
    }
};
export default entries;