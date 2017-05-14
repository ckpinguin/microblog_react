import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions/auth';
import validate from './validate';

import LoginForm from '../../components/login-form/LoginForm';

let LoginFormContainer = ({ login, cancelLogin, loggedInUser, ...rest }) => {
    console.log('loggedInUser: ', loggedInUser);
    return (
        (loggedInUser.id)
            ? <div>Already logged in with user {loggedInUser}</div>
            : <div>
                <LoginForm
                    onSubmit={login}
                    onCancel={cancelLogin}
                    {...rest}
                />
            </div>
    );
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        loggedInUser: state.auth.loggedInUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};


LoginFormContainer = reduxForm({
    form: 'LoginForm',
    getFormState: (state) => state.auth.loginForm,
    validate
})(LoginFormContainer);


export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(LoginFormContainer);
