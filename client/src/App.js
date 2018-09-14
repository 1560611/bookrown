import React from 'react';
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import DashboardPage from './components/pages/DashboardPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'

const App = ({ location }) => (
    <div className="App">
        <div className="container ui">
            <h1>Bookworm!</h1>
            <div>
                <Route location={location} path="/" exact component={HomePage} />
                <GuestRoute location={location} path="/login" exact component={LoginPage} />
                <GuestRoute location={location} path="/signup" exact component={SignupPage} />
                <UserRoute location={location} path="/dashboard" component={DashboardPage} />
            </div>
        </div>
    </div>
)

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default App;
