export const INSERT_BLOG_ENTRY = 'INSERT_BLOG_ENTRY';
export const RESET_BLOG_ENTRY = 'RESET_BLOG_ENTRY';
export const LOAD_BLOG_ENTRIES = 'LOAD_BLOG_ENTRIES';

export function insertBlogEntry(entry) {
    return {
        type: INSERT_BLOG_ENTRY,
        entry
    };
}

export function resetBlogEntry() {
    return {
        type: RESET_BLOG_ENTRY
    };
}

export function loadBlogEntries() {
    return  {
        type: LOAD_BLOG_ENTRIES
    };
}