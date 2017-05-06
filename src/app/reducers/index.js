import { combineReducers } from 'redux';

import login from './login';
import blog from './blog';

// we only combine top-levels here, rest wil be handled
// by reducer-composition pattern
export default combineReducers({
    blog,
    login
});