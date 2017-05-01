import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import editBlogEntry from './editBlogEntry';
import blogEntries from './blogEntries';

export default combineReducers({
    editBlogEntry,
    blogEntries,
    formReducer
});