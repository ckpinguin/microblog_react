import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import blog from '../..';
import validate from './validate';

class EditEntryFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        // Prefill form if asked for...
        if (nextProps.entry !== this.props.entry) {
            console.log('entry prop received: ', nextProps.entry);
            // this.forceUpdate();
        }
    }

    render() {
        const { entry, saveEntry, currentEntry, unsetCurrentEntry, ...rest } = this.props; 
        const EditEntryForm = blog.components.EditEntryForm;
        console.log('rest: ', rest);
        console.log('entry: ', entry);
        console.log('currentEntry: ', currentEntry);
        let fillEntry = {};
        if (entry) {
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
                    fillForm={currentEntry}
                    {...rest}
                />
            </div>
        );
    }
}
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
    getFormState: (state) => blog.selectors.getEditEntryForm(state),
    validate
})(EditEntryFormContainer);

export default connect(
     mapStateToProps,
     mapDispatchToProps,
)(EditEntryFormContainer);
