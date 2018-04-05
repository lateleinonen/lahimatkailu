import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CheckBoxes } from '../checkboxes';
import { checkboxActions } from '../../_actions';

class CheckBoxesContainer extends Component {
    render() {
        return (
            <CheckBoxes {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
  checkbox: state.checkbox
});

export default connect(mapStateToProps)(CheckBoxesContainer);