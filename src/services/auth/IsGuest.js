import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { token } from '../../redux/user/userSelector'

const IsGuest = ({children, token}) => {
    return (
        <>
            { !token ? children : null}
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    token
})


export default connect(mapStateToProps, null)(IsGuest);