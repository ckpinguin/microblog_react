import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

import EditBlogEntryForm from '../edit-blog-entry-form/EditBlogEntryForm';

let EditBlogEntryFormContainer = ({ saveEntry, currentEntry, unsetCurrentEntry, ...rest }) => {
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
        currentEntry: state.blog.currentEntry,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(blog.actions, dispatch);
};

EditBlogEntryFormContainer = reduxForm({
    form: 'EditBlogEntryForm',
    getFormState: (state) => state.blog.editBlogEntryForm,
    validate
})(EditBlogEntryFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditBlogEntryFormContainer);
