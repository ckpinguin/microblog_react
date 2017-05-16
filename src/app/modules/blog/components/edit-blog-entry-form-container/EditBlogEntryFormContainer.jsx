import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

let EditBlogEntryFormContainer = ({ saveEntry, currentEntry, unsetCurrentEntry, ...rest }) => {
    const EditBlogEntryForm = blog.components.EditBlogEntryForm;
    return (
        <div>
            <EditBlogEntryForm
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
        currentEntry: blog.selectors.getCurrentEntry(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(blog.actions, dispatch);
};

EditBlogEntryFormContainer = reduxForm({
    form: 'EditBlogEntryForm',
    getFormState: (state) => blog.selectors.getEditBlogEntryForm(state),
    validate
})(EditBlogEntryFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditBlogEntryFormContainer);
