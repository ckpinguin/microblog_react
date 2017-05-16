import { reducer as formReducer } from 'redux-form';

import * as t from '../actionTypes';

export default formReducer.plugin({
    LoginForm: (state, action) => { // <--- 'LoginForm' is name of form given to reduxForm()
        switch(action.type) {
        case t.LOGIN_SUCCESS:
            return {};       // <--- blow away form data
        default:
            return {...state};
        }
    }
});