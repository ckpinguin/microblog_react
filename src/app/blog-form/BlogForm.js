import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BlogForm.css';

import ShowError from '../show-error/ShowError';

export default class BlogForm extends Component {
    static propTypes = {
        newEntry:    PropTypes.object.isRequired,
        onSubmit:    PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = props.newEntry;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.state = this.props.newEntry;
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

    render() {
        return (
            <div className="BlogForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titel</label>
                        <input type="text" className="form-control"
                            id="title" name="title"
                            placeholder="Titel eingeben..."
                            value={this.state.title}
                            onChange={this.handleChange}
                            required minLength="5" maxLength="128"/>
                        <ShowError form={this} controlPath="title" displayName="Titel" />
                    </div>
                    <div className="form-group">
                        <label>Inhalt</label>
                        <textarea className="form-control"
                            id="text" name="text"
                            placeholder="Textinhalt eingeben..."
                            value={this.state.text}
                            onChange={this.handleChange} />
                        {/*<ck-show-error path="text" text="Text" />*/}
                    </div>
                    <div className="form-control">
                        <label>Bild-URL:</label>
                        <input type="text" id="image" name="image"
                            value={this.state.image}
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-default">
                        {/*disabled="!form.valid"*/}
                        Blogeintrag speichern
                    </button>
                </form>
            </div>
        );
    }
}