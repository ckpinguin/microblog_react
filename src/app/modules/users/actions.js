import t from './actionTypes';

export const fetch = (id) => {
    return (dispatch, getState) => ({
        type: t.FETCH,
        result: getState().users.filter(e => {
            return e.id === id;
        })
    });
};

export const findByName = (name) => {
    return (dispatch, getState) => {
        getState().users.filter(e => {
            return e.name === name;
        }
    );};
};
