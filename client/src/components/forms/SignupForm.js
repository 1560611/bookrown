import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Validator from 'validator'

// Components
import InlineError from './../messages/InlineError'

class SignupForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }
    handleChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate(this.state.data)
        this.setState({ errors })

        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({
                    errors: err.response.data.errors,
                    loading: false
                }))
        }
    }
    validate = data => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Email is not valid"
        if (data.password === '') errors.password = "Password is required"
        return errors
    }
    render() {
        const { errors, loading } = this.state
        return (
            <div className="SignupForm">
                <Form onSubmit={this.handleSubmit} loading={loading}>
                    <Form.Field error={!!errors.email}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                    <Form.Field error={!!errors.email}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                    <Button primary>Submit</Button>
                </Form>
            </div>
        )
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default SignupForm
