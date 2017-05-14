import login from './login';
import loginForm from './loginForm';

const auth = (state = {}, action) => {
    return {
        // giving also full state access to be make
        // decisions upon other parts of the state-tree possible
        loggedInUser: login(state.currentUser, action),
        loginForm: loginForm(state.loginForm, action)
    };
};
export default auth;


