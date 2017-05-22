import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';

import auth from '../modules/auth';
import blog from '../modules/blog';
import users from '../modules/users';

// only top-level here, rest is in the reducers...
export default combineReducers({
    [blog.constants.NAME]: blog.reducer,
    [auth.constants.NAME]: auth.reducer,
    [users.constants.NAME]: users.reducer
});