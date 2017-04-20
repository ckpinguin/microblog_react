import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'valuelink';
import { Input, TextArea } from 'valuelink/tags';

import './BlogForm.css';

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
        this.validateTitle(e.target.value);
    }

    render() {
        const linked = Link.all(this, 'title', 'text', 'image');
        const titleLink = linked.title
            .check(x => x, 'Title is required')
            .check(x => x.length > 5, 'Title must be greater than 5 characters long')
            .check(x => x.length < 128, 'Title must be less than 128 characters long');
        return (
            <div className="BlogForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titel</label>
                        <Input type="text"
                            className="form-control"
                            valueLink={titleLink} />
                    </div>
                    <div className="form-group">
                        <label>Inhalt</label>
                        <TextArea className="form-control"
                            valueLink={linked.text} />
                    </div>
                    <div className="form-control">
                        <label>Bild-URL:</label>
                        <Input type="text" id="image" name="image"
                            valueLink={linked.image} />
                    </div>
                    <button type="submit" className="btn btn-default"
                        disabled={titleLink.error}>
                        Blogeintrag speichern
                    </button>
                </form>
            </div>
        );
    }
}