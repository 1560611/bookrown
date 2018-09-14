import React from 'react'

// Redux
import { connect } from 'react-redux'
import { loginAction } from './../../actions/authAction'
import PropTypes from 'prop-types'

// Components
import LoginForm from './../forms/LoginForm'

class LoginPage extends React.Component {
    submit = data =>
        this.props.loginAction(data)
            .then(() => this.props.history.push('/dashboard'))

    render() {
        return (
            <div className="LoginPage">
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}

LoginPage.propTypes = {
    loginAction: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { loginAction })(LoginPage)
