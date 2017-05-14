import { SET_CURRENT_USER, UNSET_CURRENT_USER }
    from '../../actions';


const currentUser = (state = {}, action) => {
    switch (action.type) {
    case SET_CURRENT_USER:
        console.log(`reducer ${action.type} called`);
        return action.user;
    case UNSET_CURRENT_USER:
        console.log(`reducer ${action.type} called`);
        return {};
    default:
        return state;
    }
};
export default currentUser;