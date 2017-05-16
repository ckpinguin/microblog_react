import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';
const configureStore = (initialState = {}, history ) => {
    const middlewares = [thunk, routerMiddleware(history)];
    //middleware = applyMiddleware(routerMiddleware(browserHistory));

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
    return store;
};
export default configureStore;