import React from 'react';
import t from 'prop-types';
import { bindActionCreators } from 'redux';
import * as types from 'actions/types';
import { connect } from 'react-redux';
import { ActionCreators } from 'actions';

@connect(state => ({
  Test: state.testReducer[types.TEST],
}), dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
}))
class SectionTest extends React.Component {

  static propTypes = {
    Test: t.object.isRequired
  }

  render () {
    return (
      <div>SECTION</div>
    );
  }
}

export default SectionFeatures;
