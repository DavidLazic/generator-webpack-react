import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from 'routes';
import DevTools from './DevTools';

export default class Root extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render () {
        return (

            <Provider store={ this.props.store }>
                <div>
                    <Routes store={ this.props.store } />
                    {
                        process.env.NODE_ENV === 'local' &&
                            <DevTools />
                    }
                </div>
            </Provider>
        );
    }
}
