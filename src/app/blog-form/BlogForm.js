import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../form-tags/input';
import TextArea from '../form-tags/input';
import { ruleRunner, run } from '../form-validation/validator';
import { required, minLength, maxLength } from '../form-validation/rules';

import update from 'immutability-helper';
import $ from 'jquery';

import './BlogForm.css';

export default class EditBlogEntry extends Component {
    static propTypes = {
        newEntry:    PropTypes.object.isRequired,
        onSubmit:    PropTypes.func.isRequired,
    };

    fieldValidations = [
        ruleRunner('title', 'Title', required, minLength(5), maxLength(128)),
        ruleRunner('text', 'Text', required)
    ];

    errorFor = (field) => {
        return this.state.validationErrors[field];
    }

    constructor(props) {
        super(props);
        this.state = {
            showErrors: false,
            validationErrors: {}
        };
        // Run validations on initial state
        // this.state.validationErrors = run(this.state, fieldValidations);
    }

    componentWillMount() {
        this.setState(this.props.newEntry);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // No submit if errors exist
        if($.isEmptyObject(this.state.validationErrors) === false) {
            this.setState({showErrors: true});
            return null;
        }
        // OK, so we submit up the chain
        this.props.onSubmit(this.state);
        this.setState(this.props.newEntry); // anti-pattern?
        this.pristine = true;
    }

    handleFieldChanged(field) {
        return (e) => {
            // update() is provided by immutability-helper
            let newState = update(this.state, {
                [field]: {$set: e.target.value}
            });
            // let newState2 = {
            //     ...this.state,
            //     validationErrors: run(newState, this.fieldValidations)
            // };
            newState.validationErrors = run(newState, this.fieldValidations);
            this.setState(newState);
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.pristine = false;
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newState = update(this.state, {
                [name]: {$set: value}
        });
        newState.validationErrors = run(newState, this.fieldValidations);
        this.setState(newState);
        // this.setState({
        //     [name]: value
        // });
    }

    render() {
        // let valid = this.validate(this.state);
        return (
            <div className="BlogForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titel</label>
                        <Input type="text"
                            // valid={this.pristine || false}
                            name="title"
                            id="title"
                            showError={this.state.showErrors}
                            errorText={this.errorFor('title')}
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Titel eingeben..." />
                    </div>
                    <div className="form-group">
                        <label>Inhalt</label>
                        <TextArea
                            name="text"
                            showError={this.state.showErrors}
                            errorText={this.errorFor('text')}
                            value={this.state.text}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Textinhalt eingeben..." />
                    </div>
                    <div className="form-control">
                        <label>Bild-URL:</label>
                        <Input type="text"
                            name="image"
                            id="image"
                            value={this.state.image}
                            onChange={this.handleChange}
                            placeholder="Bildadresse eingeben..." />
                    </div>
                    <button type="submit" className="btn btn-default"
                        disabled={this.state.showErrors}
                        >
                        Blogeintrag speichern
                    </button>
                </form>
            </div>
        );
    }
}

