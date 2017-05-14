import currentUser from './currentUser';
import loginForm from './loginForm';

const login = (state = {}, action) => {
    return {
        // giving also full state access to be make
        // decisions upon other parts of the state-tree possible
        currentUser: currentUser(state.currentUser, action, state),
        loginForm: loginForm(state.loginForm, action)
    };
};
export default login;


