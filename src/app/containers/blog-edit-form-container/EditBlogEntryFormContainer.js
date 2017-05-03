import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import EditBlogEntryForm from '../../components/blog-edit-form/EditBlogEntryForm';


const initialValues = {
    title: 'INITIAL TITLE',
    text: 'Some bogus text'
};
let EditBlogEntryFormContainer = ({ saveBlogEntry, ...rest }) => {
    const reset = rest.reset;
    const onSubmit = (data) => {
        console.log('submitting form with data: ', data);
        saveBlogEntry(data);
        reset();
    };
    // console.log('rest: ', rest);
    return (
        <div>
            <EditBlogEntryForm initialValues={initialValues} onSubmit={onSubmit} {...rest} />
        </div>
    );
};

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch);
}

// This injects meta: error, touched etc.
EditBlogEntryFormContainer = reduxForm({
    form: 'EditBlogEntryForm',
    validate
})(EditBlogEntryFormContainer);

// This injects actions bound to props and initializes local state
export default connect(
     undefined,
     mapDispatchToProps,
)(EditBlogEntryFormContainer);
