import * as t from '../actionTypes';


const currentEntry = (state = {}, action) => {
    // console.log('currentEntry reducer called: ', state, action);
    switch (action.type) {
    case t.SET_CURRENT_ENTRY:
        console.log(`reducer ${action.type} called`);
        return action.payload;
    case t.UNSET_CURRENT_ENTRY:
        console.log(`reducer ${action.type} called`);
        return {};
    default:
        return state;
    }
};
export default currentEntry;