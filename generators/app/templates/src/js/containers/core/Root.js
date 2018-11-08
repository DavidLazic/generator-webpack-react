import React, { Component, Fragment } from 'react';
import t from 'prop-types';
import { Provider } from 'react-redux';
import Routes from 'routes';
import DevTools from './DevTools';

export default class Root extends Component {

    static propTypes = {
      store: t.object.isRequired
    }

    componentDidMount () {
      window.dataLayer = window.dataLayer || [];
    }

    render () {
      return (

        <Provider store={ this.props.store }>
          <Fragment>
            <Routes store={ this.props.store } />
            {
              process.env.NODE_ENV === 'development' &&
              <DevTools />
            }
          </Fragment>
        </Provider>
      );
    }
}
