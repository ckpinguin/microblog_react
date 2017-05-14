import currentEntry from './currentEntry';
import entries from './entries';
import editBlogEntryForm from './editBlogEntryForm';

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


