import currentEntry from './reducers/currentEntry';
import entries from './reducers/entries';
import editBlogEntryForm from './reducers/editBlogEntryForm';

const blog = (state = {}, action) => {
    return {
        // giving also full state access to be make
        // decisions upon other parts of the state-tree possible
        entries: entries(state.entries, action, state),
        currentEntry: currentEntry(state.currentEntry, action, state),
        editBlogEntryForm: editBlogEntryForm(state.editBlogEntryForm, action)
    };
};
export default blog;


