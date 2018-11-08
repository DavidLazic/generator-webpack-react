import React, { Component } from 'react';
import GTM from 'constants/gtm';
import { trackEvent } from 'lib/helpers';

/**
 * @description
 * Higher order component
 * Component wrapper used GTM tracking
 *
 * @param  {Function} WrappedComponent
 * @return {Object}
 * @public
 */
export const useGTM = () => (WrappedComponent = () => null) =>
  class UseGTM extends Component {

    onEventTrack = type =>
      GTM[type] &&
      trackEvent(GTM[type])

    render () {
      return (
        <WrappedComponent
          { ...this.props }
          onEventTrack={ this.onEventTrack } />
      );
    }
  };
