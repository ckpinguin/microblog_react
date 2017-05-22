import * as t from './actionTypes';

const guid = () => {
    const s4 = () => (
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    );
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

const addEntry = (entry) => ({
    type: t.ADD_ENTRY,
    payload: entry
});

const addEntrySuccess = (entry) => ({
    type: t.ADD_ENTRY_SUCCESS,
    payload: entry
});

const updateEntry = (entry) => ({
    type: t.UPDATE_ENTRY,
    payload: entry
});

const updateEntrySuccess = (entry) => ({
    type: t.UPDATE_ENTRY_SUCCESS,
    payload: entry
});

export const removeEntry = (id) => ({
    type: t.REMOVE_ENTRY,
    payload: id
    
});

export const removeEntrySuccess = (id) => ({
    type: t.REMOVE_ENTRY_SUCCESS,
    payload: id
});

export const setCurrentEntry = (entry) => ({
    type: t.SET_CURRENT_ENTRY,
    payload: entry
});

export const unsetCurrentEntry = () => ({
    type: t.UNSET_CURRENT_ENTRY
});

// A bit an artificial example of using thunk capabilities ;-)
// With thunk, we can use dispatch and getState in action creators
// to make decisions, async calls etc. (i.e. side-effect stuff, that
// is not allowed in reducers)
export const setCurrentEntryById = (id) => {
    console.log('action SET_CURRENT_ENTRY_BY_ID called');

    return (dispatch, getState) => {
        let entry;
        // this is likely more performant than array.filter()
        // O(n) for small, local mockup data should be ok 
        for (entry of getState().blog.entries.entriesList.entries) {
            if (entry.id === id) {
                break;
            }
        }
        dispatch(setCurrentEntry(entry));
    };
};

// This is not an action creator, but it calls them after doing some
// business logic.
// Normally we would save the entry into a backend server or database
// asynchronously with dispatching the function (in payload)
export const saveEntry = (entry) => {
    return (dispatch, getState) => {
        // 0 is falsy in JS, so this is working only safely with
        // guid as id...
        if (entry.id) {
            const oldEntry = getState().blog.entries[entry.id];
            const merged = Object.assign({}, oldEntry, entry);
            // This is normally called after async backend op success:
            dispatch(updateEntrySuccess(merged));
        } else {
            const id = guid();
            entry.id = id;
            // This is normally called after async backend op success:
            dispatch(addEntrySuccess(entry));
        }
        dispatch(unsetCurrentEntry());
    };
};
