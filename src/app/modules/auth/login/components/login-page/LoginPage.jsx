import React from 'react';

import Login from '../..';

import './LoginPage.css';

export default class LoginPage extends React.Component {
    title = 'Login';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = this.title;
    }

    render() {
        console.log('props: ', this.props);
        const LoginFormContainer = Login.components.LoginFormContainer;
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