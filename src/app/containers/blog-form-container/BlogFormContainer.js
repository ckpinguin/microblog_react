import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as Actions from '../../actions';
import validate from './validate';

import EditBlogEntryForm from '../../components/blog-form/BlogForm';


let EditBlogEntryFormContainer = ({ resetNewBlogEntry, insertBlogEntry, ...rest }) => {
    const reset = rest.reset;
    const submitMyForm = (data) => {
        console.log('submitting form with data: ', data);
        insertBlogEntry(data);
        reset();
    };
    console.log('rest: ', rest);
    return (
        <div>
            <EditBlogEntryForm submitMyForm={submitMyForm} {...rest} />
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
