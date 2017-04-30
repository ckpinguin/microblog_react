import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'valuelink';
import { Input, TextArea } from 'valuelink/tags';

import _ from 'underscore';

import './BlogForm.css';

export default class EditBlogEntry extends Component {
    static propTypes = {
        newEntry:    PropTypes.object.isRequired,
        onSubmit:    PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.setState(this.props.newEntry);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.pristine = true;
        this.setState(this.props.newEntry); // anti-pattern?
    }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    validate = (state) => {
        return {
            title: state.title.length >= 5
        };
    }

    render() {
        const linked = Link.all(this, 'title', 'text', 'image');
        const titleLink = linked.title
            .check(x => x, 'Titel ist ein Pflichtfeld')
            .check(x => x.length >= 5, 'Titel muss mindestens 5 Zeichen enthalten')
            .check(x => x.length < 128, 'Titel darf maximal 128 Zeichen enthalten');
        let valid = this.validate(this.state);
        return (
            <div className="BlogForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titel</label>
                        <MyInput type="text"
                            valid={valid.value}
                            name="title"
                            id="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Titel eingeben..." />
                    </div>
                    <div className="form-group">
                        <label>Inhalt</label>
                        <TextArea
                            valueLink={linked.text}
                            className="form-control"
                            placeholder="Textinhalt eingeben..." />
                    </div>
                    <div className="form-control">
                        <label>Bild-URL:</label>
                        <Input type="text"
                            valueLink={linked.image}
                            placeholder="Bildadresse eingeben..." />
                    </div>
                    <button type="submit" className="btn btn-default"
                        disabled={ titleLink.error}>
                        Blogeintrag speichern
                    </button>
                </form>
            </div>
        );
    }
}

class MyInput extends Component {
    static propTypes = {
        value:    PropTypes.string.isRequired,
        onChange:    PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            validationStarted: false,
            touched: false
        };
    }

    componentWillMount() {
        let startValidation = function() {
            this.setState({
                validationStarted: true
            });
        };

        if (this.props.value) { // input not empty?
            startValidation();
        } else {
            this.delayedValidate = _.debounce(startValidation, 1500);
        }
    }

    componentWillUnmount() {
        this.delayedValidate.cancel();
    }

    handleChange = (e) => {
        if (!this.state.validationStarted) {
            this.delayedValidate();
        }
        this.props.onChange(e);
    }

    render() {
        const { valid, className, ...rest } = this.props;
        let classes = className;
        if (this.state.validationStarted) {
            classes = (valid ? classes : classes + ' invalid');
        }
        return (
            <div>
                <input
                    {...rest}
                    onBlur={() => this.setState({touched: true})}
                    className={classes}
                    onChange={this.handleChange} />
                <div style={{display: 
                    (this.state.touched && this.state.validationStarted && !valid) ? 'block' : 'none'}}
                    className="alert alert-danger error-placeholder">
                    {'error' || ''}
                </div>
            </div>
        );
    }

}
