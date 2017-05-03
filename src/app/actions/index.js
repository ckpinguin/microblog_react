export const SAVE_BLOG_ENTRY = 'SAVE_BLOG_ENTRY';
export const SAVE_BLOG_ENTRY_SUCCESS = 'SAVE_BLOG_ENTRY_SUCCESS';
export const LOAD_BLOG_ENTRIES = 'LOAD_BLOG_ENTRIES';
export const FORM_FIELD_HAS_ERROR = 'FORM_FIELD_HAS_ERROR';

export function saveBlogEntry(entry) {
    console.log('action SAVE_BLOG_ENTRY called with: ', entry);
    return {
        type: SAVE_BLOG_ENTRY,
        entry
    };
}

export function formFieldHasError() {
    return {
        type: FORM_FIELD_HAS_ERROR
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