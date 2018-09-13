import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter } from 'react-router-dom'

// Redux
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
