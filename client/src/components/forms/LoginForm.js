import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'

// Components
import InlineError from './../messages/InlineError'

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    handleChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    })
    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate(this.state.data)
        this.setState({ errors })
    }
    validate = data => {
        let errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Email is not right"
        if (data.password === '') errors.password = "Password must not be empty"
        return errors
    }

    render() {
        const { errors } = this.state
        return (
            <div className="LoginForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field error={!!errors.email}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                    <Button primary>Login</Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm