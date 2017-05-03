import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import './BlogForm.css';

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


let EditBlogEntryForm = ({ newBlogEntry, resetNewBlogEntry, insertBlogEntry, ...rest }) => {
    const submitMyForm = (data) => {
        console.log('submitting form with data: ', data);
        insertBlogEntry(data);
        //dispatch(Actions.resetNewBlogEntry());
    };

    const { handleSubmit, pristine, submitting } = rest;
    return (
        <form onSubmit={handleSubmit(submitMyForm)}>
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
                    onClick={resetNewBlogEntry}>
                    Formular leeren
                </button>
            </div>
        </form>
    );
};

function mapStateToProps({newBlogEntry}) {
    return {
        newBlogEntry
    };
}
function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch);
}

// This injects meta: error, touched etc.
EditBlogEntryForm = reduxForm({
    form: 'EditBlogEntryForm',
    validate
})(EditBlogEntryForm);

// This injects actions bound to props and initializes local state
export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditBlogEntryForm);
