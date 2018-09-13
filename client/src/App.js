import React from 'react';
import { Route } from 'react-router-dom'

// Components
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

const App = () => (
    <div className="App">
        <h1>Bookworm!</h1>
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
        </div>
    </div>
)

export default App;
