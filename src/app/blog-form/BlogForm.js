import React, { Component } from 'react';

import './BlogForm.css';

export default class BlogForm extends Component {
    static propTypes = {
        newEntry:    React.PropTypes.object.isRequired,
        onSubmit:    React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = props.newEntry;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit: ', e);
        this.props.onSubmit(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log('handleChange: ', name, value);
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
                            required />
                        {/*<ck-show-error path="title" text="Titel"></ck-show-error>*/}
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