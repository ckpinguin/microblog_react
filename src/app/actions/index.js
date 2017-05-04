export const SAVE_BLOG_ENTRY = 'SAVE_BLOG_ENTRY';
export const SAVE_BLOG_ENTRY_SUCCESS = 'SAVE_BLOG_ENTRY_SUCCESS';
export const DELETE_BLOG_ENTRY = 'DELETE_BLOG_ENTRY';
export const LOAD_BLOG_ENTRIES = 'LOAD_BLOG_ENTRIES';
export const LOGIN = 'LOGIN';

export function saveBlogEntry(entry) {
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

export function loadBlogEntries() {
    console.log('action LOAD_BLOG_ENTRIES called');
    return  {
        type: LOAD_BLOG_ENTRIES
    };
}

export function deleteBlogEntry(id) {
    console.log('action DELETE_BLOG_ENTRY called');
    return {
        type: DELETE_BLOG_ENTRY
    };
}

export function login() {
    console.log('action LOGIN called');
    return {
        type: LOGIN
    };
}