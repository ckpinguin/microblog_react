import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

let EditEntryFormContainer = (
    { entry, saveEntry, editEntryFinished, ...rest }
     ) => {
    // Don't show the form if it is not wanted by the entry
    let fillEntry = {};
    if (!entry.showForm) {
        return null;
    }
    if (entry.id) {
        fillEntry = entry;
    }
    const EditEntryForm = blog.components.EditEntryForm;
    
    return (
        <div>
            <EditEntryForm
                onSubmit={saveEntry}
                onReset={editEntryFinished}
                fillForm={fillEntry}
                {...rest}
            />
        </div>
    );
};

EditEntryFormContainer.propTypes = {
    entry:              PropTypes.object,
    // injected by mapStateToProps/mapDispatchToProps:
    saveEntry:          PropTypes.func.isRequired,
    editEntryFinished:  PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(blog.actions, dispatch);
};

// reduxForm consumes props.initialValue if provided
EditEntryFormContainer = reduxForm({
    form: 'EditEntryForm',
    getFormState: (state) => blog.selectors.getEditEntryForm(state),
    validate
})(EditEntryFormContainer);

export default connect(
    null,
    mapDispatchToProps
)(EditEntryFormContainer);
