import { LOGIN  } from '../../actions';

const login = (state = {}, action) => {
    switch (action.type) {
    case LOGIN:
        return state;
    default:
        return state;
    }
};
export default login;