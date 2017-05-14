export const FETCH_USER = 'FETCH_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const fetchUser = (id) => {
    return (dispatch, getState) => ({
        type: FETCH_USER,
        result: getState().user.filter(e => {
            e.id === id;
        })
    });
};

const findUserByName = (name) => {
    return (dispatch, getState) => {
        getState().user.filter(e => {
            e.name === name;
        }
    );};
};