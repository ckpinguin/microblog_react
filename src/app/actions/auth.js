export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER';

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

const unsetCurrentUser = () => ({
    type: UNSET_CURRENT_USER
});

export const login = (userEntry) => {
    return (dispatch, getState) => {
        // 0 is falsy in JS, so this is working only safely with
        // guid as id...
        if (userEntry.name) {
            dispatch(loginSuccess());
            dispatch(setCurrentUser(name));
        }
    };
};

export const cancelLogin = () => {
    return (dispatch) => {
        console.log('login cancelled');
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(unsetCurrentUser());
    };
};