import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'containers/core/App';

import View1 from 'containers/views/View1';
import View2 from 'containers/views/View2';

const publicPath = '/';

export const routeCodes = {
    ROOT: publicPath,
    VIEW_1: `${ publicPath }view_1`,
    VIEW_2: `${ publicPath }view_2`
};

/**
 * @description
 * Example resolve some query prop existance.
 *
 * @param {Object} props
 * @param {Object} nextState
 * @param {Function} replace
 * @return {Function}
 * @public
 */
function onEnter (props, nextState, replace) {
    const { queryProp } = nextState.location.query;

    return queryProp && replace({ pathname: props.redirectTo });
}

const routes = (
    <Route path={ publicPath } component={ App } >
        <IndexRoute component={ View1 } />

        <Route
            path={ routeCodes.VIEW_2 }
            onEnter={ onEnter.bind(null, { redirectTo: routeCodes.VIEW_1 }) }
            component={ View2 } />
    </Route>
);

export default class Routes extends Component {

    render () {
        return (
            <Router history={ browserHistory }>
                { routes }
            </Router>
        );
    }
}
