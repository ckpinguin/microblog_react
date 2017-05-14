// Blog
export const ADD_BLOG_ENTRY = 'ADD_BLOG_ENTRY';
export const UPDATE_BLOG_ENTRY = 'UPDATE_BLOG_ENTRY';
export const SAVE_BLOG_ENTRY_SUCCESS = 'SAVE_BLOG_ENTRY_SUCCESS';
export const REMOVE_BLOG_ENTRY = 'REMOVE_BLOG_ENTRY';
export const SET_CURRENT_BLOG_ENTRY = 'SET_CURRENT_BLOG_ENTRY';
export const UNSET_CURRENT_BLOG_ENTRY = 'UNSET_CURRENT_BLOG_ENTRY';


const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

const saveBlogEntrySuccess = () => ({
    type: SAVE_BLOG_ENTRY_SUCCESS
});

const saveBlogEntryInReducer = (entry) => ({
    type: ADD_BLOG_ENTRY,
    entry
});

const updateBlogEntryInReducer = (entry) => ({
    type: UPDATE_BLOG_ENTRY,
    entry
});

const setCurrentBlogEntry = (entry) => {
    return {
        type: SET_CURRENT_BLOG_ENTRY,
        entry
    };
};

export const unsetCurrentBlogEntry = () => ({
    type: UNSET_CURRENT_BLOG_ENTRY
});

// A bit an artificial example of using thunk capabilities ;-)
// With thunk, we can use dispatch and getState in action creators
// to make decisions, async calls etc. (i.e. side-effect stuff, that
// is not allowed in reducers)
export const setCurrentBlogEntryById = (id) => {
    console.log('action SET_CURRENT_BLOG_ENTRY called');

    return (dispatch, getState) => {
        let entry;
        // this is likely more performant than array.filter()
        // O(n) for small, local mockup data should be ok 
        for (entry of getState().blog.entries) {
            if (entry.id === id) {
                break;
            }
        }
        dispatch(setCurrentBlogEntry(entry));
    };
};

// This is not an action creator, but it calls them after doing some
// business logic.
// Normally we would save the entry into a backend server or database
export const saveBlogEntry = (entry) => {
    return (dispatch, getState) => {
        // 0 is falsy in JS, so this is working only safely with
        // guid as id...
        if (entry.id) {
            const oldEntry = getState().blog.entries[entry.id];
            const merged = Object.assign({}, oldEntry, entry);
            dispatch(updateBlogEntryInReducer(merged));
        } else {
            const id = guid();
            entry.id = id;
            dispatch(saveBlogEntryInReducer(entry));
        }
        dispatch(saveBlogEntrySuccess());
    };
};

export const removeBlogEntry = (id) => {
    console.log('action REMOVE_BLOG_ENTRY called');
    return {
        type: REMOVE_BLOG_ENTRY,
        id
    };
};