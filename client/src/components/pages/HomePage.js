import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutAction } from './../../actions/authAction'

const HomePage = ({ isAuthenticated, logoutAction }) => (
    <div className="HomePage">
        <h1>HomePage</h1>
        {
            isAuthenticated
                ?
                // @ts-ignore
                <
                    button
                    onClick={() => logoutAction()}
                >
                    Log out
                </button>
                :
                <div>
                    <Link to="/login">Login</Link>
                    or
                    <Link to="/signup">Sign up</Link>
                </div>
        }
    </div>
)

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutAction: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps, { logoutAction })(HomePage)
