import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';

import { getAll } from '../../selectors';
import { LoginForm } from '../login-form/LoginForm';
import * as actions from '../../actions';
import login from '../..';

import validate from './validate';

let LoginFormContainer = ({ doLogin, cancelLogin, loggedInUser, ...rest }) => {
    console.log('loggedInUser: ', loggedInUser);
    return (
        (loggedInUser !== undefined)
            ? <div>Already logged in with user {loggedInUser}</div>
            : <div>
                <LoginForm
                    onSubmit={doLogin}
                    onCancel={cancelLogin}
                    {...rest}
                />
            </div>
    );
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        loggedInUser: state.auth.login.loggedInUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

LoginFormContainer = reduxForm({
    form: 'LoginForm',
    getFormState: (state) => state.auth.login.loginForm,
    validate
})(LoginFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(LoginFormContainer);
