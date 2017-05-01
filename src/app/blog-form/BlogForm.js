import React from 'react';
// import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as Actions from '../actions';

import './BlogForm.css';

import validate from './validate';

// const  { DOM: { input, textarea } } = React;
// import * as Actions from '../actions';

const renderField = ({ input, label, className, placeholder, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input}
                type={type}
                className={className}
                placeholder={placeholder} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);
const renderTextArea = ({ input, label, className, placeholder, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input}
                className={className}
                placeholder={placeholder}  />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const EditBlogEntryForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
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

function mapStateToProps(state) {
    return {
        entry: state.newEntry
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default reduxForm({
    form: 'editBlogEntry',
    validate,
})(EditBlogEntryForm);
// .connect(mapStateToProps, mapDispatchToProps)(EditBlogEntryForm);