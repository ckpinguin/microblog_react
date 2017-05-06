import { ADD_BLOG_ENTRY, UPDATE_BLOG_ENTRY }
    from '../../actions';

const entry = (state, action) => {
    switch (action.type) {
    case ADD_BLOG_ENTRY:
    // maybe add some default field construction here?
        return {
            ...action.entry
        };
    case UPDATE_BLOG_ENTRY:
        if (action.entry.id !== state.id) {
            return state;
        }
        return {
            ...state,
            ...action.entry // update the new fields
        };
    default:
        return state;
    }
};
export default entry;
