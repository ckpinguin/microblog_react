import * as t from '../actionTypes';

const initialState = {
    inProgress: false,
    error: null
};

const loginProcess = (state = initialState, action) => {
    let error;
    switch (action.type) {
 
    case t.LOGIN:
        return {
            ...state,
            inProgress: true
        };
    case t.LOGIN_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: null
        };
    case t.LOGOUT_FAILED:
    case t.LOGIN_FAILED:
        // 2nd one is for network or server problems
        error = action.payload || {message: action.payload.message};
        return {
            ...state,
            inProgress: false,
            error: error
        };
    case t.LOGOUT_SUCCESS:
        return {
            ...state,
            inProgress: false,
            error: false
        };
    }
};
export default loginProcess;
