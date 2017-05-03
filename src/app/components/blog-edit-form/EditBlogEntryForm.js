import React from 'react';

import { Field } from 'redux-form';


import './EditBlogEntryForm.css';

// const  { DOM: { input, textarea } } = React;

const renderField = ({ input, label, className, placeholder,
                       type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input}
                type={type}
                className={className}
                placeholder={placeholder} />
            {touched && error && <div className="alert alert-danger error-placeholder">{error}</div>}
        </div>
    </div>
);
const renderTextArea = ({ input, label, className, placeholder,
                          meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input}
                className={className}
                placeholder={placeholder}  />
            {touched && error && <div className="alert alert-danger error-placeholder">{error}</div>}
        </div>
    </div>
);

const EditBlogEntryForm = ({ onSubmit, reset, handleSubmit,
                             pristine, submitting, ...rest }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Field name="title"
                    type="text"
                    component={renderField}
                    label="Titel"
                    className="form-control"
                    placeholder="Titel eingeben..." />
            </div>
            <div className="form-group">
                <Field name="text"
                    component={renderTextArea}
                    label="Text"
                    className="form-control"
                    placeholder="Textinhalt eingeben..." />
            </div>  
            <div className="form-group">
                <Field name="image"
                    type="text"
                    component={renderField}
                    label="Bild-URL:"
                    className="form-control"
                    placeholder="Bildadresse eingeben..." />
            </div>  
            <div>
                <button type="submit" className="btn btn-default"
                    disabled={submitting}>
                    Blogeintrag speichern
                </button>
                <button type="button"
                    disabled={pristine || submitting}
                    onClick={reset}>
                    Formular leeren
                </button>
            </div>
        </form>
    );
};

export default EditBlogEntryForm;