import React from 'react';
import { render } from 'react-dom';
import { configStore } from './store/store';
import Root from 'containers/core/Root.js';

import '../scss/style.scss';

render(
  <Root store={ configStore() } />,
  document.getElementById('app')
);
