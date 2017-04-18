import React from 'react';
import PropTypes from 'prop-types';

import './ShowError.css';

ShowError.propTypes = {
    controlPath:    PropTypes.string.isRequired,
    displayName:    PropTypes.string
};
ShowError.defaultPrps = {
    displayName: ''
};

export default function ShowError({form, controlPath, displayName}) {
    const messages = [];
    const control = {};// form.controlPath;
    if (!control || !(control.touched) || !(control.errors)) {
        return null;
    }
    for (const code in control.errors) {
        if (control.errors.hasOwnProperty(code)) {
            const error = control.errors[code];
            let message = '';
            switch (code) {
            case 'required':
                message = `${displayName} ist ein Pflichtfeld`;
                break;
            case 'minlength':
                message = `${displayName} muss mindestens
                           ${error.requiredLength}  Zeichen enthalten`;
                break;
            default:
                message = `${displayName} ist nicht gültig`;
            }
            messages.push(message);
        }
    }

    let messageDisplay;
    if (messages) {
        messageDisplay = (<div className="alert alert-danger">
                {messages}
                {this.props.list.map(function(data, i) {
                    return (<p key={i}>{data}</p>);
                })}
            </div>);
    }
    return (
        <div className="ShowError">
            {messageDisplay}
        </div>
    );
}