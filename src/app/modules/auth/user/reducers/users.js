import * as t from '../actionTypes';   
import initialStateUsers from './initialStateUsers';

const users = (state = initialStateUsers, action) => {
    switch (action.type) {
    case t.FETCH_USERS:
    case t.FETCH_USERS_SUCCESS:
    case t.FETCH_USERS_FAILED:
    case t.ADD:
    case t.UPDATE:
    case t.REMOVE:
    default:
        return state;
    }
};
export default users;
