import { FORM_FIELD_HAS_ERROR } from '../actions';

export default function blogEntriesReducer(state = false, action) {
    switch (action.type) {
    case FORM_FIELD_HAS_ERROR:
        return true;
    default:
        return state;
    }
}