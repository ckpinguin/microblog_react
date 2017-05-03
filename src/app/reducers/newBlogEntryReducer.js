import { RESET_NEW_BLOG_ENTRY } from '../actions';

const initialNewEntry = {
    id: 0,
    title: 'INITIAL EMPTY STUFF',
    text: 'blubber blah',
    image: '',
    date: null,
    tags: []
};
const emptyNewEntry = {
    id: 0,
    title: '',
    text: '',
    image: '',
    date: null,
    tags: []
};

export default function blogEntriesReducer(state = initialNewEntry, action) {
    switch (action.type) {
    case RESET_NEW_BLOG_ENTRY:
        console.log('reducer RESET_NEW_BLOG_ENTRY called');
        return emptyNewEntry;
    default:
        return state;
    }
}