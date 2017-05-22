import t from './actionTypes';

const fetchUsers = () => ({
    type: t.FETCH_USERS
});
const fetchUsersSuccess = (users) => ({
    type: t.FETCH_USERS_SUCCESS,
    payload: users
});
const fetchUsersFailure = (error) => ({
    type: t.FETCH_USERS_FAILURE,
    payload: error
});

export const findUserById = (id) => {
    return (dispatch, getState) => ({
        type: t.FETCH,
        result: getState().users.filter(e => {
            return e.id === id;
        })
    });
};

export const findUserByName = (name) => {
    return (dispatch, getState) => {
        getState().users.filter(e => {
            return e.name === name;
        }
    );
    };
};
