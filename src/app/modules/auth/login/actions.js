import * as t from './actionTypes';
import { push, go, replace, goBack } from 'react-router-redux';

const loginSuccess = (user) => ({
    type: t.LOGIN_SUCCESS,
    user
});
const loginCancelled = () => ({
    type: t.LOGIN_CANCELLED
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
        if (userEntry.name) {
            dispatch(loginSuccess(userEntry));
            dispatch(setCurrentUser(userEntry));
            dispatch(goBack('home'));
        }
    };
};

export const cancelLogin = () => {
    return (dispatch, getState) => {
        console.log('login cancelled');
        dispatch(loginCancelled());
        dispatch(goBack('/home'));
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(unsetCurrentUser());
    };
};