import React from "react"
import { Redirect, Route } from "react-router-dom"
import {connect } from "react-redux"

const PrivateRoute = ({ component: Component, userRole, routeRole, ...rest }) => {
    console.log("userRole")

    const authorize = routeRole.some(role=>role === userRole)
    console.log(authorize)

    if (authorize) {
        return (
            <Route {...rest} render={props => <Component {...props} />} />
        )
    } else {
        return (
            <Redirect to={{
                pathname: "/loginerror",
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
