export const logger = (store) => (next) => (action) => {
    console.log('action fired: ', action);
    next(action);
};
export const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.error('ERROR in action firing: ', e);
    }
};