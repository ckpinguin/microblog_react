import { combineReducers } from 'redux';

import blogEntriesReducer from './blogEntriesReducer';
import editBlogFormReducer from './editBlogFormReducer';
import formErrorReducer from './formErrorReducer';

export default combineReducers({
    blogEntries: blogEntriesReducer,
    formError: formErrorReducer,
    form: editBlogFormReducer
});