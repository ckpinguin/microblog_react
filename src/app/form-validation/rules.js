import * as ErrorMessages from './errorMessages.js';

// Validating Thunks that check some properties and in case of an error
// return a reference to an error-message-creating function
// or null if OK

export const required = (text) => {
    if (text) {
        return null;
    } else {
        return ErrorMessages.isRequired;
    }
};

export const mustMatchField = (field, fieldName) => {
    return (text, state) => {
        return state[field] === text
            ? null
            : ErrorMessages.mustMatch(fieldName); // currying
    };
};

export const minLength = (length) => {
    return (text) => {
        // console.log('Checking for length greater than ', length);
        return text.length >= length
            ? null
            : ErrorMessages.minLength(length);
    };
};

export const maxLength = (length) => {
    return (text) => {
        // console.log('Checking for length smaller than ', length);
        return text.length < length
            ? null
            : ErrorMessages.maxLength(length);
    };
};