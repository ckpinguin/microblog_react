import login from './login/reducer';

const auth = (state = {}, action) => {
    return {
        // giving also full state access to be make
        // decisions upon other parts of the state-tree possible
        login: login(state.login, action),
    };
};
export default auth;