import { combineReducers } from 'redux';

import auth from '../modules/auth';
import blog from '../modules/blog';

// only top-level here, rest is in the reducers...
export default combineReducers({
    [blog.constants.NAME]: blog.reducer,
    [auth.constants.NAME]: auth.reducer
});