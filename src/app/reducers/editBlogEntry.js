import { INSERT_BLOG_ENTRY, RESET_BLOG_ENTRY } from '../actions';

export default function editBlogEntry(state = {}, action) {
    switch (action.type) {
    case INSERT_BLOG_ENTRY:
        return action.entry;
    case RESET_BLOG_ENTRY:
        return '';
    default:
        return state;
    }
}