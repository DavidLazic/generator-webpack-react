import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/style.scss';

import { configStore } from 'lib/configStore';
import Root from 'containers/core/Root.js';

const store = configStore();

ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('app')
);
