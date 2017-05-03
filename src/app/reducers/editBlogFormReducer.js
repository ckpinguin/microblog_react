import { reducer as formReducer } from 'redux-form';

import {INSERT_BLOG_ENTRY_SUCCESS} from '../actions';


export default formReducer.plugin({
    EditBlogEntryForm: (state, action) => { // <------ 'editBlog' is name of form given to reduxForm()
        switch(action.type) {
        case INSERT_BLOG_ENTRY_SUCCESS:
            return undefined;       // <--- blow away form data
        default:
            return state;
        }
    }
});