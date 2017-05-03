import { combineReducers } from 'redux';

import blogEntriesReducer from './blogEntriesReducer';
import editBlogFormReducer from './editBlogFormReducer';


export default combineReducers({
    blogEntries: blogEntriesReducer,
    form: editBlogFormReducer
});