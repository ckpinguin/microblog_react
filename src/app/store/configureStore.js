import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState = {} ) => {
    let middleware = applyMiddleware(thunk);

    const store = middleware(createStore)(
        rootReducer,
        initialState
    );
    return store;
};
export default configureStore;