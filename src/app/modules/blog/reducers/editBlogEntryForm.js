import { reducer as formReducer } from 'redux-form';

import * as t from '../actionTypes';


export default formReducer.plugin({
    EditBlogEntryForm: (state, action) => { // <--- 'EditBlogEntryForm' is name of form given to reduxForm()
        switch(action.type) {
        case t.SAVE_ENTRY_SUCCESS:
            return undefined;       // <--- blow away form data
        case t.UNSET_CURRENT_ENTRY:
            return undefined;       // <--- blow away form data
        default:
            return state;
        }
    }
});