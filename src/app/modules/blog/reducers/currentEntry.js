import * as t from '../actionTypes';

const currentEntry = (state = {}, action) => {
    // console.log('currentEntry reducer called: ', state, action);
    switch (action.type) {
    case t.SET_CURRENT_ENTRY:
        return {
            ...state,
            ...action.payload
        };
    case t.UNSET_CURRENT_ENTRY:
        return {
            showNewEntryForm: false
        };
    case t.NEW_ENTRY:
        return {
            ...state,
            showNewEntryForm: true
        };
    default:
        return state;
    }
};
export default currentEntry;