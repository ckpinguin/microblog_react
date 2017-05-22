import users from './reducers/users';

const user = (state = {}, action) => {
    return {
        // giving also full state access to be make
        // decisions upon other parts of the state-tree possible
        users: users(state.entries, action, state)
    };
};
export default user;



