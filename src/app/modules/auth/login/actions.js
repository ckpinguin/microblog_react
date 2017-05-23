import * as t from './actionTypes';
// import { push, go, replace, goBack } from 'react-router-redux';
import { goBack } from 'react-router-redux';

import userModule from '../user';

import md5 from 'md5';


const login = () => ({
    type: t.LOGIN
});
const loginSuccess = (user) => {
    return {
        type: t.LOGIN_SUCCESS,
        payload: user
    };
};
const loginFailed = (error) => ({
    type: t.LOGIN_FAILED,
    payload: error
});
const loginCancelled = () => ({
    type: t.LOGIN_CANCELLED
});

const logout = () => ({
    type: t.LOGOUT
});
const logoutSuccess = () => ({
    type: t.LOGOUT_SUCCESS
});
const logoutFailed = () => ({
    type: t.LOGOUT_FAILED
});


const setLoggedInUser = (id) => {
    return {
        type: t.SET_LOGGED_IN_USER,
        payload: id
    };
};
const unsetLoggedInUser = () => ({
    type: t.UNSET_LOGGED_IN_USER
});


// action creators

export const doLogin = (user) => {
    return (dispatch, getState) => {
        if (user.name) {
            dispatch(login(user));
            
            // do async stuff
            const storedUser = userModule.selectors.findUserByName(getState(), user.name);
            console.log('user found: ', storedUser);
            if (storedUser.password === md5(user.password)) {
                console.log('login success');
                dispatch(loginSuccess(user));
                console.log('trying to store id: ', storedUser.id);
                dispatch(setLoggedInUser({id: storedUser.id, name: storedUser.name}));
                dispatch(goBack('home'));
            } else {
                console.log('login failure');
                dispatch(loginFailed(user));
            }
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

export const doLogout = () => {
    return (dispatch) => {
        dispatch(logout());
        dispatch(logoutSuccess());
        dispatch(unsetLoggedInUser());
    };
};