import { reducer as formReducer } from 'redux-form';

import {SAVE_BLOG_ENTRY_SUCCESS, UNSET_CURRENT_BLOG_ENTRY} from '../../actions';


export default formReducer.plugin({
    EditBlogEntryForm: (state, action) => { // <--- 'EditBlogEntryForm' is name of form given to reduxForm()
        switch(action.type) {
        case SAVE_BLOG_ENTRY_SUCCESS:
            return undefined;       // <--- blow away form data
        case UNSET_CURRENT_BLOG_ENTRY:
            return undefined;       // <--- blow away form data
        default:
            return state;
        }
    }
});