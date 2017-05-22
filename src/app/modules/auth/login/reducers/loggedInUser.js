import * as t from '../actionTypes';

const initialState = {
    loggedIn: false,
    inProgress: false,
    user: null,
    error: null
};
const loggedInUser = (state = initialState, action) => {
    switch (action.type) {
    case t.LOGIN:
        return {
            ...state,
            inProgress: true
        };
    case t.SET_LOGGED_IN_USER:
        console.log(`reducer ${action.type} called`);
        return { 
            ...state,
            user: action.payload
        };
    case t.UNSET_LOGGED_IN_USER:
        console.log(`reducer ${action.type} called`);
        return {
            ...state,
            user: null
        };
    case t.LOGIN_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {
            ...state,
            loggedIn: true
        };
    case t.LOGOUT_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {
            ...state,
            loggedIn: false
        };
    default:
        return state;
    }
};
export default loggedInUser;