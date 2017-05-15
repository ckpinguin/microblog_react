import React from 'react';
// import PropTypes from 'prop-types';

import login from '../..';

import './LoginPage.css';

export default class LoginPage extends React.Component {
    title = 'Login';
    componentDidMount() {
        document.title = this.title;
    }

    render() {
        const LoginFormContainer = login.components.LoginFormContainer;
        return (
        <div>
            <div className="title">
                <h1>{this.title}</h1>
            </div>
            <div className="mainContent">
                <LoginFormContainer />
            </div>
        </div>
        );
    }
}