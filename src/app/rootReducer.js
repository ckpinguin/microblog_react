import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './modules/auth';
import blog from './modules/blog';
import users from './modules/users';
import login from './modules/login';

export default combineReducers({
    routing: routerReducer,
    [blog.constants.NAME]: blog.reducer,
    [auth.constants.NAME]: auth.reducer,
    [login.constants.NAME]: login.reducer,
    [users.constants.NAME]: users.reducer
});