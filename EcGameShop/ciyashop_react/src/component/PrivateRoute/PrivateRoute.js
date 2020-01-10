import React from "react"
import { Redirect, Route } from "react-router-dom"
import {connect } from "react-redux"

const PrivateRoute = ({ component: Component, userRole, routeRole, ...rest }) => {
    console.log("userRole")

    if (userRole === routeRole) {
        return (
            <Route {...rest} render={props => <Component {...props} />} />
        )
    } else {
        return (
            <Redirect to={{
                pathname: "/",
            }}
            
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userRole: state.login.role
    }
}

export default connect(mapStateToProps)(PrivateRoute) 
