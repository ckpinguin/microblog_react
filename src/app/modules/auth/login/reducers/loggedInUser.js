import * as t from '../actionTypes';


const loggedInUser = (state = {}, action) => {
    switch (action.type) {
    case t.SET_LOGGED_IN_USER:
    case t.LOGIN_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return action.user;
    case t.UNSET_LOGGED_IN_USER:
    case t.LOGOUT_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {};
    default:
        return state;
    }
};
export default loggedInUser;