import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

    return replace({ pathname: queryProp ? props.redirectTo : routeCodes.VIEW_2 });
}

const routes = (
    <Switch path={ publicPath } component={ App } >
        <Route exact={ true } path={ routeCodes.ROOT } component={ View1 } />

        <Route
            path={ routeCodes.VIEW_2 }
            onEnter={ onEnter.bind(null, { redirectTo: routeCodes.VIEW_1 }) }
            component={ View2 } />
    </Switch>
);

export default class Routes extends Component {

    render () {
        return (
            <BrowserRouter>
                { routes }
            </BrowserRouter>
        );
    }
}
