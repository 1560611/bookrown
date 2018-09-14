import React from 'react'
import PropTypes from 'prop-types'

// Components
import SignupForm from './../forms/SignupForm'

// Redux
import { signupAction } from './../../actions/authAction'
import { connect } from 'react-redux'

class SignupPage extends React.Component {
    submit = data => {
        this.props.signupAction(data)
            .then(() => this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <div className="SignupPage">
                <SignupForm submit={this.submit} />
            </div>
        )
    }
}

SignupPage.propTypes = {
    signupAction: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { signupAction })(SignupPage)
