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

    pristine = true;
    titleTouched = false;

    constructor(props) {
        super(props);
        this.state = props.newEntry;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.state = this.props.newEntry; // anti-pattern?
    }

    render() {
        const linked = Link.all(this, 'title', 'text', 'image');
        const titleLink = linked.title
            .check(x => x, 'Titel ist ein Pflichtfeld')
            .check(x => x.length > 5, 'Titel muss mindestens 5 Zeichen enthalten')
            .check(x => x.length < 128, 'Titel darf maximal 128 Zeichen enthalten');
        return (
            <div className="BlogForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titel</label>
                        <Input type="text"
                            valueLink={titleLink}
                            onBlur={() => this.setState({titleTouched: true})}
                            className="form-control"
                            placeholder="Titel eingeben..."
                            maxLength="128" />
                        <div style={{display: 
                                (this.state.titleTouched && titleLink.error) ? 'block' : 'none'}}
                            className="alert alert-danger error-placeholder">
                            {titleLink.error || ''}
                        </div>
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
                        disabled={this.pristine || titleLink.error}>
                        Blogeintrag speichern
                    </button>
                </form>
            </div>
        );
    }
}
