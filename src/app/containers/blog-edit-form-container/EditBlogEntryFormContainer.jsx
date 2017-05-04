import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import EditBlogEntryForm from '../../components/blog-edit-form/EditBlogEntryForm';

let EditBlogEntryFormContainer = ({ saveBlogEntry, currentEntry, unsetCurrentBlogEntry, ...rest }) => {
    const onSubmit = (data) => {
        console.log('submitting form with data: ', data);
        saveBlogEntry(data);
        // reset();
    };
    console.log('rest: ', rest);
    return (
        <div>
            <EditBlogEntryForm
                onSubmit={onSubmit}
                onReset={unsetCurrentBlogEntry}
                fillForm={currentEntry}
                {...rest}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentEntry: state.blog.currentEntry
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};

// This injects meta: error, touched etc.
EditBlogEntryFormContainer = reduxForm({
    form: 'EditBlogEntryForm',
    validate
})(EditBlogEntryFormContainer);

// This injects actions bound to props and initializes local state
export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditBlogEntryFormContainer);
