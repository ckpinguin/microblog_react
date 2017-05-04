export const SAVE_BLOG_ENTRY = 'SAVE_BLOG_ENTRY';
export const SAVE_BLOG_ENTRY_SUCCESS = 'SAVE_BLOG_ENTRY_SUCCESS';
export const DELETE_BLOG_ENTRY = 'DELETE_BLOG_ENTRY';
export const SET_CURRENT_BLOG_ENTRY = 'SET_CURRENT_BLOG_ENTRY';
export const UNSET_CURRENT_BLOG_ENTRY = 'UNSET_CURRENT_BLOG_ENTRY';
export const LOGIN = 'LOGIN';

// TODO: remove console.log's if confident enough with redux...

// Normally we would save the entry into a backend server or database
export function saveBlogEntry(entry) {
    return (dispatch) => {
        // replace this first dispatch with a promise/observable
        // to save into backend or db and in only if ok dispatch
        // the 2nd
        dispatch(saveBlogEntryInReducer(entry));
        dispatch(saveBlogEntrySuccess());
    };
}

export function saveBlogEntryInReducer(entry) {
    console.log('action SAVE_BLOG_ENTRY called with: ', entry);
    return {
        type: SAVE_BLOG_ENTRY,
        entry
    };
}

export function saveBlogEntrySuccess() {
    console.log('action SAVE_BLOG_ENTRY_SUCCESS called');
    return {
        type: SAVE_BLOG_ENTRY_SUCCESS
    };
}

export function unsetCurrentBlogEntry() {
    return {
        type: UNSET_CURRENT_BLOG_ENTRY
    };
}

// A bit an artificial example of using thunk capabilities ;-)
// With thunk, we can use dispatch and getState in action creators
// to make decisions, async calls etc. (i.e. side-effect stuff, that
// is not allowed in reducers)
export function setCurrentBlogEntryById(id) {
    console.log('action SET_CURRENT_BLOG_ENTRY called');
    return (dispatch, getState) => {
        const entry = getState().blog.entries[id];
        dispatch(setCurrentBlogEntry(entry));
    };
}

export function setCurrentBlogEntry(entry) {
    return {
        type: SET_CURRENT_BLOG_ENTRY,
        entry
    };
}

export function deleteBlogEntry(id) {
    console.log('action DELETE_BLOG_ENTRY called');
    return {
        type: DELETE_BLOG_ENTRY,
        id
    };
}

export function login() {
    console.log('action LOGIN called');
    return {
        type: LOGIN
    };
}