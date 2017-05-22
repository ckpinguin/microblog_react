import * as t from './actionTypes';
// import { push, go, replace, goBack } from 'react-router-redux';
import { goBack } from 'react-router-redux';

const login = () => ({
    type: t.LOGIN
});
const loginSuccess = (user) => {
    return {
    type: t.LOGIN_SUCCESS,
    payload: user
    }
};
const loginFailed = (error) => ({
    type: t.LOGIN_FAILED,
    payload: error
});
const loginCancelled = () => ({
    type: t.LOGIN_CANCELLED
});


const setCurrentUser = (user) => {
    return {
        type: t.SET_LOGGED_IN_USER,
        payload: user
    };
};
const unsetCurrentUser = () => ({
    type: t.UNSET_LOGGED_IN_USER
});

export const doLogin = (user) => {
    return (dispatch, getState) => {
        if (user.name) {
            dispatch(login(user));

            // TODO: check password
            
            // do async stuff

            dispatch(loginSuccess(user));
            // dispatch(loginFailed(user));
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