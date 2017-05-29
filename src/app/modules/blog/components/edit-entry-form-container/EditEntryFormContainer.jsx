import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

let EditEntryFormContainer = (
    { entry, saveEntry, currentEntry, editEntryFinished, ...rest }
     ) => {
    // Don't show the form if it is not wanted by the entry or
    // state.currentEntry (for new entries)
    let fillEntry = {};
    if ('undefined' === typeof entry) { // no specific entry given
        if (!currentEntry.showNewEntryForm) {
            return null;
        } else {
            fillEntry = currentEntry;
        }
    } else { // a specific entry has been given
        if (!entry.showForm) {
            return null;
        }
        if (entry.id) {
            fillEntry = entry;
        }
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
    currentEntry:       PropTypes.object.isRequired,
    editEntryFinished:  PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentEntry: blog.selectors.getCurrentEntry(state)
    };
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

// const { saveEntry, editEntryFinished } = blog.actions;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEntryFormContainer);
