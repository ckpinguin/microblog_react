import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import EditBlogEntryForm from '../../components/blog-edit-form/EditBlogEntryForm';

let EditBlogEntryFormContainer = ({ saveBlogEntry, currentEntry, unsetCurrentBlogEntry, ...rest }) => {
    return (
        <div>
            <EditBlogEntryForm
                onSubmit={saveBlogEntry}
                onReset={unsetCurrentBlogEntry}
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
    return bindActionCreators(Actions, dispatch);
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
