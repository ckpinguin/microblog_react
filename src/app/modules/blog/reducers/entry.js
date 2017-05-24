import * as t from '../actions/actionTypes';

const entry = (state, action) => {
    switch (action.type) {

    case t.EDIT_ENTRY:
        if (action.payload !== state.id) {
            return state;
        }
        return {
            ...state,
            showForm: true
        };

    case t.EDIT_ENTRY_FINISHED:
        if (action.payload !== state.id) {
            return state;
        }
        return {
            ...state,
            showForm: false
        };
    
    case t.ADD_ENTRY_SUCCESS:
        return action.payload;
    case t.ADD_ENTRY_FAILURE:
        return action.payload;

    case t.UPDATE_ENTRY_SUCCESS:
        if (action.payload.id !== state.id) {
            return state;
        }
        return {
            ...state,
            ...action.payload // update the new fields
        };
    case t.UPDATE_ENTRY_FAILURE:
        if (action.payload.id !== state.id) {
            return state;
        }
        return {
            ...state,
            ...action.payload // update the new fields
        };

    case t.REMOVE_ENTRY_SUCCESS:
        return (state.id !== action.payload) ? state : undefined;
    case t.REMOVE_ENTRY_FAILURE:
        return (state.id !== action.payload) ? state : undefined;

    default:
        return state;
    }
};
export default entry;
