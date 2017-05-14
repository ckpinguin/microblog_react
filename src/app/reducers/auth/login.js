import { LOGIN_SUCCESS, LOGOUT_SUCCESS }
    from '../../actions';


const login = (state = {}, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {loggedInUser: action.user};
    case LOGOUT_SUCCESS:
        console.log(`reducer ${action.type} called`);
        return {loggedInUser: {}};
    default:
        return state;
    }
};
export default login;