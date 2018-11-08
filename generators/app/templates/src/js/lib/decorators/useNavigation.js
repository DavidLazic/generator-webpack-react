import React, { Component } from 'react';
import history from 'routes/history';

/**
 * @description
 * Higher order component
 * Component wrapper used for navigation
 *
 * @param  {Function} WrappedComponent
 * @return {Object}
 * @public
 */
export const useNavigation = () => (WrappedComponent = () => null) =>
  class UseNavigation extends Component {

    /**
     * @description
     * On navigate to route.
     *
     * @param {String} route
     * @param {Object} props
     * @return {Function}
     * @public
     */
    onNavigate = (route, props) => history.push(route, props)

    /**
     * @description
     * On delay navigate to route.
     *
     * @param {String} route
     * @param {Object} props
     * @param {Number} debounce
     * @return {Function}
     * @public
     */
    onNavigateDelay = (route, props, delay) =>
      setTimeout(() => history.push(route, props), delay)

    render () {
      return (
        <WrappedComponent
          { ...this.props }
          navigateDebounce={ this.onNavigateDelay }
          navigate={ this.onNavigate } />
      );
    }
  };
