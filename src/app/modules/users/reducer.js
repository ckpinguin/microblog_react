import * as t from './actionTypes';
    
import initialStateUsers from './reducers/initialStateUsers';

const users = (state = initialStateUsers, action) => {
    switch (action.type) {
    case t.ADD:
    case t.UPDATE:
    case t.REMOVE:
    default:
        return state;
    }
};
export default users;



