import { ADD_USER, UPDATE_USER, REMOVE_USER }
    from '../../actions';
    
import initialUsers from './initialUsers';

const users = (state = initialUsers, action) => {
    switch (action.type) {
    case ADD_USER:
    case UPDATE_USER:
    case REMOVE_USER:
    default:
        return state;
    }
};
export default users;



