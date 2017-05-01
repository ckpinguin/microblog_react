export const isRequired = fieldName => `${fieldName} is required`;

export const mustMatchField = otherFieldName => {
    return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = length => {
    return (fieldName) => `${fieldName} must be at least ${length} characters`; 
};

export const maxLength = length => {
    return (fieldName) => `${fieldName} must be shorter than ${length} characters`; 
};