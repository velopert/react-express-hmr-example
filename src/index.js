import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers';


let rootElement = document.getElementById('root');
const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, rootElement
);

