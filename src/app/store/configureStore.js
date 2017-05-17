import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';
import * as myMiddleware from './middleware.js';

const configureStore = (initialState = {}, history ) => {
    const middlewares = [
        thunk,
        routerMiddleware(history),
        myMiddleware.logger,
        myMiddleware.error
    ];

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
    return store;
};
export default configureStore;