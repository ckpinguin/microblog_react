const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.text = 'Required';
    }
    return errors;
};

export default validate;