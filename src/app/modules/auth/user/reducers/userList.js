import * as t from '../actionTypes';   
import initialStateUsers from './initialStateUsers';

const userList = (state = initialStateUsers, action) => {
    let error = null;
    // console.log('reducer called for ', action.type);
    switch (action.type) {
    case t.FETCH_USERS:
        return {
            ...state,
            error: null,
            loading: true
        }; 
    case t.FETCH_USERS_SUCCESS:
        return {
            users: [
                ...state.users,
                action.payload
            ],
            error: null,
            loading: false
        }; 
    case t.FETCH_USERS_FAILURE:
        // 2nd one is for network or server problems
        error = action.payload || {message: action.payload.message};
        return {
            ...state,
            users: [],
            error: error,
            loading: false
        };
    case t.ADD:
    case t.UPDATE:
    case t.REMOVE:
    default:
        return state;
    }
};
export default userList;
