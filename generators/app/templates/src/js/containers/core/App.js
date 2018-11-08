import React, { Component } from 'react';
import t from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from 'actions';
import { withRouter } from 'react-router';
import * as types from 'actions/types';

@connect(state => ({
  Test: state.testReducer[types.TEST]
}), dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
}))
class App extends Component {

    static propTypes = {
      Test: t.object.isRequired,
      children: t.object.isRequired
    }

    render () {
      console.log('Test', this.props.Test);

      return (
        <div className="">
          { this.props.children }
        </div>
      );
    }
}

export default withRouter(App);
