export const INSERT_BLOG_ENTRY = 'INSERT_BLOG_ENTRY';
export const INSERT_BLOG_ENTRY_SUCCESS = 'INSERT_BLOG_ENTRY_SUCCESS';
export const LOAD_BLOG_ENTRIES = 'LOAD_BLOG_ENTRIES';

export function insertBlogEntry(entry) {
    console.log('action INSERT_BLOG_ENTRY called with: ', entry);
    return {
        type: INSERT_BLOG_ENTRY,
        entry
    };
}

export function insertBlogEntrySuccess() {
    console.log('action INSERT_BLOG_ENTRY_SUCCESS called');
    return {
        type: INSERT_BLOG_ENTRY_SUCCESS
    };
}

export function loadBlogEntries() {
    console.log('action LOAD_BLOG_ENTRIES called');
    return  {
        type: LOAD_BLOG_ENTRIES
    };
}