import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";
import decode from 'jwt-decode'

import { BrowserRouter, Route } from 'react-router-dom'

// Redux
import store from './store'
import { Provider } from 'react-redux'
import { userLoggedInAction } from './actions/authAction'

if (localStorage.bookwormJWT) {
    const payload = decode(localStorage.bookwormJWT)
    store.dispatch(userLoggedInAction({
        token: localStorage.bookwormJWT,
        email: payload.email,
        confirmed: payload.confirmed
    }))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
