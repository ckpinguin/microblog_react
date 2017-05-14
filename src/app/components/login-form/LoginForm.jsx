import React from 'react';

import { Field } from 'redux-form';

import './LoginForm.css';

// const  { DOM: { input, textarea } } = React;
export default class LoginForm extends React.Component {
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
                <div className="hidden">
                    <Field name="name"
                        type="text"
                        component={this.renderField}
                        label="Name"
                        className="form-control"
                        placeholder="Name eingeben..." />
                </div>
                <div className="form-group">
                    <Field name="password"
                        type="password"
                        component={this.renderField}
                        label="Passwort"
                        className="form-control"
                        placeholder="Passwort eingeben..." />
                </div>
                <div>
                    <button type="submit" className="btn btn-default"
                        disabled={this.state.errors || submitting || pristine}>
                        Login
                    </button>
                    <button type="button" className="btn btn-default"
                        disabled={pristine || submitting}
                        onClick={onReset}>
                        Abbrechen
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
}