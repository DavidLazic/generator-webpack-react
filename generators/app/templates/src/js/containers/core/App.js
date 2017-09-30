import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from 'actions';
import { Api } from 'lib';
import { PING } from 'constants/api';
import * as types from 'actions/types';

@connect(state => ({
    oAuth: state.authReducer[types.USER]
}), dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
}))

export default class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    /**
     * @description
     * Ping current user.
     *
     * @return {Function<Object>}
     * @public
     */
    pingUser () {
        Api.get(PING)
            .then(user => this.props.actions.setUser(user));
    }

    render () {
        return (
            <section>
                {
                    React.Children.map(this.props.children, (child, index) =>
                        React.cloneElement(child, {
                            ping: this.pingUser.bind(this),
                            key: index
                        }))
                }
            </section>
        );
    }
}
