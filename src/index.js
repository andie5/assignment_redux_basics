import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import { reducers } from './reducers';
import * as serviceWorker from './serviceWorker';
//import { composeWithDevTools } from 'redux-devtools-extension';

// Create our store
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
