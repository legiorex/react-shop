import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.css';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';

import createStore from './store';
const store = createStore();




ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
