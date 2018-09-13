import React from 'react'

// Components
import LoginForm from './../forms/LoginForm'

class LoginPage extends React.Component {
    state = {

    }

    submit = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div className="LoginPage">
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}

export default LoginPage
