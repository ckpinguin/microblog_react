import { combineReducers } from 'redux';

import blogReducer from './blogReducer';

import editBlogFormReducer from './editBlogFormReducer';
import loginReducer from './loginReducer';
// import currentBlogEntryReducer from './currentBlogEntryReducer';

export default combineReducers({
    blog: blogReducer,
    // currentBlogEntry: currentBlogEntryReducer,
    login: loginReducer,
    form: editBlogFormReducer
});