import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import blogEntriesReducer from './blogEntriesReducer';
import newBlogEntryReducer from './newBlogEntryReducer';
import editBlogFormReducer from './editBlogFormReducer';
import {INSERT_BLOG_ENTRY_SUCCESS} from '../actions';


export default combineReducers({
    blogEntries: blogEntriesReducer,
    newBlogEntry: newBlogEntryReducer,
    form: editBlogFormReducer
});