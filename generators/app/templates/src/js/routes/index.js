import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import history from './history';
import App from 'containers/core/App';
import { ViewTest } from 'containers/views';

const publicPath = '/';

export const routes = {
  ROOT: publicPath,
  TEST: `${publicPath}experience`
};

export default class Routes extends Component {
  render () {
    return (
      <Router history={ history }>
        <App>
          <Switch>
            <Route path={ `${routes.TEST}` } component={ ViewTest } />
            <Route component={ () => <Redirect to={ routes.ROOT } /> } />
          </Switch>
        </App>
      </Router>
    );
  }
}
