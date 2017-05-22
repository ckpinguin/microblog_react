import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

let EditEntryFormContainer = ({ saveEntry, currentEntry, unsetCurrentEntry, ...rest }) => {
    const EditEntryForm = blog.components.EditEntryForm;
    return (
        <div>
            <EditEntryForm
                onSubmit={saveEntry}
                onReset={unsetCurrentEntry}
                fillForm={currentEntry}
                {...rest}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentEntry: blog.selectors.getCurrentEntry(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(blog.actions, dispatch);
};

EditEntryFormContainer = reduxForm({
    form: 'EditEntryForm',
    getFormState: (state) => blog.selectors.getEditEntryForm(state),
    validate
})(EditEntryFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditEntryFormContainer);
