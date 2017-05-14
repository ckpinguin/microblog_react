import { reducer as formReducer } from 'redux-form';

import { LOGIN_SUCCESS } from '../../actions';


export default formReducer.plugin({
    LoginForm: (state, action) => { // <--- 'LoginForm' is name of form given to reduxForm()
        switch(action.type) {
        case LOGIN_SUCCESS:
            return undefined;       // <--- blow away form data
        default:
            return state;
        }
    }
});