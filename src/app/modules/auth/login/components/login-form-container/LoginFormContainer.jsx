import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import login from '../..';
import validate from './validate';

let LoginFormContainer = ({ doLogin, cancelLogin, loggedInUser, ...rest }) => {
    const LoginForm = login.components.LoginForm;
    return (
        (loggedInUser.id !== undefined)
            ? <div>Already logged in with user {loggedInUser}</div>
            : <div>
                <LoginForm
                    onSubmit={doLogin}
                    onCancel={cancelLogin}
                    fillForm={loggedInUser}
                    {...rest}
                />
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loggedInUser: login.selectors.getLoggedInUser(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(login.actions, dispatch);
};

LoginFormContainer = reduxForm({
    form: 'LoginForm',
    getFormState: (state) => login.selectors.getForm(state),
    validate
})(LoginFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(LoginFormContainer);
