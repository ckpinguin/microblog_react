import { combineReducers } from 'redux';

import auth from './auth';
import blog from './blog';
import user from './user';


// we only combine top-levels here, rest wil be handled
// by reducer-composition pattern
export default combineReducers({
    blog,
    auth,
    user
});