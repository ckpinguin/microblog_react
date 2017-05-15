import * as t from '../actionTypes';


const loggedInUser = (state = {}, action) => {
    switch (action.type) {
    case t.LOGIN_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {loggedInUser: action.user};
    case t.LOGOUT_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {loggedInUser: {}};
    default:
        return state;
    }
};
export default loggedInUser;