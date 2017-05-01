import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

export default class Textarea extends Component {
    static propTypes = {
        value:      PropTypes.string.isRequired,
        onChange:   PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            validationStarted: false,
            // validationErrors: {},
            touched: false
        };
    }

    componentWillMount() {
        let startValidation = function() {
            this.setState({
                validationStarted: true,
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
        const { className, text, showError, errorText, ...rest } = this.props;
        const shouldDisplayError = () => {
            return showError && errorText !== '';
        };
        let classes = className;
        if (this.state.validationStarted) {
            classes = ( shouldDisplayError() ? classes : classes + ' invalid');
        }
        return (
            <div>
                <textarea
                    {...rest}
                    onBlur={() => this.setState({touched: true})}
                    className={classes}
                    onChange={this.handleChange} />
                <div style={{display: 
                    (this.state.validationStarted && shouldDisplayError()) ? 'block' : 'none'}}
                    className="alert alert-danger error-placeholder">
                    { errorText || ''}
                </div>
            </div>
        );
    }
}