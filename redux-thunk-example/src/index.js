import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import api from './actions/api';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const middleWares = [thunk, api];
const enhancer = composeEnhancers(applyMiddleware(...middleWares));

const store = createStore(rootReducer, enhancer);

if (module.hot) {
    module.hot.accept('./reducer', () =>
        store.replaceReducer(require('./reducer').default),
    );
}
window.__reduxStore__ = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
