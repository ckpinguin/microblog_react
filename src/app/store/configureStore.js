import { createStore } from 'redux';
import reducer from '../reducers';
// import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState //,
        // applyMiddleware(thunk)
    );
    // console.log('store is: ', store.getState());
    return store;
}