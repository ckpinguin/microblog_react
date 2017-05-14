import React from 'react';

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import LoginForm from '../../components/login-form/LoginForm';

let LoginFormContainer = ({ login, cancel, ...rest }) => {
    return (
        <div>
            <LoginForm
                onSubmit={login}
                onCancel={cancel}
                {...rest}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};


LoginFormContainer = reduxForm({
    form: 'LoginForm',
    getFormState: (state) => state.login.loginForm,
    validate
})(LoginFormContainer);

export default withRouter(connect(
     // mapStateToProps,
     mapDispatchToProps,
)(LoginFormContainer));
