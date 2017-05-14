import React from 'react';
// import PropTypes from 'prop-types';

import LoginFormContainer from '../../containers/login-form-container/LoginFormContainer';
import BlogList from '../../containers/blog-list/BlogList';

import './BlogPage.css';

export default class LoginPage extends React.Component {
    title = 'Login';
    componentDidMount() {
        document.title = this.title;
    }

    render() {
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