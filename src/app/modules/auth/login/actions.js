import * as t from './actionTypes';

const loginSuccess = (user) => ({
    type: t.LOGIN_SUCCESS,
    user
});

const setCurrentUser = (user) => {
    return {
        type: t.SET_LOGGED_IN_USER,
        user
    };
};

const unsetCurrentUser = () => ({
    type: t.UNSET_LOGGED_IN_USER
});

export const doLogin = (userEntry) => {
    return (dispatch, getState) => {
        // 0 is falsy in JS, so this is working only safely with
        // guid as id...
        if (userEntry.name) {
            dispatch(loginSuccess(userEntry));
            dispatch(setCurrentUser(userEntry));
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