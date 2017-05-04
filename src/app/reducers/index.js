import { combineReducers } from 'redux';

import blogEntriesReducer from './blogEntriesReducer';
import editBlogFormReducer from './editBlogFormReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    blogEntries: blogEntriesReducer,
    login: loginReducer,
    form: editBlogFormReducer
});