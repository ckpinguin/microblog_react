import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

let EditEntryFormContainer = ( 
    { entry, saveEntry, currentEntry, unsetCurrentEntry, ...rest }
     ) => {
    const EditEntryForm = blog.components.EditEntryForm;
    console.log('rest: ', rest);
    console.log('entry: ', entry);
    console.log('currentEntry: ', currentEntry);
    let fillEntry = {};
    if (entry.id) {
        fillEntry = entry;
    } else {
        fillEntry = currentEntry;
    }
    console.log('calling form with: ', fillEntry);
    return (
        <div>
            <EditEntryForm
                onSubmit={saveEntry}
                onReset={unsetCurrentEntry}
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
    unsetCurrentEntry:  PropTypes.func.isRequired

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
    // form: `EditEntryForm-${entry.id}`,
    getFormState: (state) => blog.selectors.getEditEntryForm(state),
    validate
})(EditEntryFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditEntryFormContainer);
