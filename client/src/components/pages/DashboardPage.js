import React from 'react'
import ConfirmEmailMessage from './../messages/ConfirmEmailMessage'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

const DashboardPage = ({ isComfirmed }) => (
    <div>
        <h1>Dashboard Page</h1>
        {!isComfirmed && <ConfirmEmailMessage />}
    </div>
)

DashboardPage.propTypes = {
    isComfirmed: PropTypes.bool.isRequired
}
const mapStateToProps = state => {
    return {
        isComfirmed: !!state.auth.confirmed
    }
}

export default connect(mapStateToProps, {})(DashboardPage) 