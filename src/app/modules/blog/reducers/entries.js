import * as t from '../actionTypes';

import entry from './entry';

import initialStateEntries from './initialStateEntries';

const entries = (state = initialStateEntries, action) => {
    switch (action.type) {
    case t.ADD_ENTRY:
        return [
            ...state,
            entry(undefined, action)
        ];
    case t.UPDATE_ENTRY:
        return state.map(e => entry(e, action));
    case t.REMOVE_ENTRY:
        return state.filter(e => entry(e, action));        
    default:
        return state;
    }
};
export default entries;