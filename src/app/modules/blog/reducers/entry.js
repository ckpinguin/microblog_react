import * as t from '../actionTypes';

const entry = (state, action) => {
    switch (action.type) {
    case t.ADD_ENTRY:
    // later we can add some default field construction here
        return action.entry;
    case t.UPDATE_ENTRY:
        if (action.entry.id !== state.id) {
            return state;
        }
        return {
            ...state,
            ...action.entry // update the new fields
        };
    case t.REMOVE_ENTRY:
        return (state.id !== action.id) ? state : undefined;
    default:
        return state;
    }
};
export default entry;
