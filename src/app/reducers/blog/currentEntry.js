import { SET_CURRENT_BLOG_ENTRY, UNSET_CURRENT_BLOG_ENTRY }
    from '../../actions';


const currentEntry = (state = {}, action) => {
    switch (action.type) {
    case SET_CURRENT_BLOG_ENTRY:
        console.log(`reducer ${action.type} called`);
        return action.entry;
    case UNSET_CURRENT_BLOG_ENTRY:
        console.log(`reducer ${action.type} called`);
        return {};
    default:
        return state;
    }
};
export default currentEntry;