import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './modules/auth';
import blog from './modules/blog';
import users from './modules/users';

// we only combine top-levels here, rest wil be handled
// by reducer-composition pattern
export default combineReducers({
    routing: routerReducer,
    [blog.constants.NAME]: blog.reducer,
    [auth.constants.NAME]: auth.reducer,
    [users.constants.NAME]: users.reducer,
});