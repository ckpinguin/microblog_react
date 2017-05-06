import React from 'react';

import { Field } from 'redux-form';

import './EditBlogEntryForm.css';

// const  { DOM: { input, textarea } } = React;
export default class EditBlogEntryForm extends React.Component {
    constructor(props) {
        super(props);
        /**
         *  This local state is totally OK for a presentational
         *  component, because it is UI-related (and needed)
         */
        this.state = {
            errors: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.invalid) {
            this.setState({errors: true});
        } else {
            this.setState({errors: false});
        }
        // Prefill form if asked for...
        if (nextProps.fillForm !== this.props.fillForm) {
            nextProps.initialize(nextProps.fillForm);
        }
    }

    render() {
        const { onSubmit, onReset, handleSubmit,
                pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Field name="id"
                        component={this.renderField}
                        type="hidden"
                        />
                    <Field name="title"
                        type="text"
                        component={this.renderField}
                        label="Titel"
                        className="form-control"
                        placeholder="Titel eingeben..." />
                </div>
                <div className="form-group">
                    <Field name="text"
                        component={this.renderTextArea}
                        label="Text"
                        className="form-control"
                        placeholder="Textinhalt eingeben..." />
                </div>  
                <div className="form-group">
                    <Field name="image"
                        type="text"
                        component={this.renderField}
                        label="Bild-URL:"
                        className="form-control"
                        placeholder="Bildadresse eingeben..." />
                </div>  
                <div>
                    <button type="submit" className="btn btn-default"
                        disabled={this.state.errors || submitting || pristine}>
                        Blogeintrag speichern
                    </button>
                    <button type="button" className="btn btn-default"
                        disabled={pristine || submitting}
                        onClick={onReset}>
                        Formular leeren
                    </button>
                </div>
            </form>
        );
    }
    
    renderField = ({ input, label, className, placeholder,
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

    renderTextArea = ({ input, label, className, placeholder,
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
}