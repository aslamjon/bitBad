import React from 'react'
import { BrowserRouter as WebRouter, Switch, Route, Redirect } from 'react-router-dom'
import LayoutManager from '../layouts/LayoutManager'
import DashboardPage from '../pages/DashboardPage'
import LandingPage from '../pages/LandingPage'
import LoginOrSignUpPage from '../pages/LoginOrSignUpPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
const Router = () => {
    return (
        <WebRouter>
            <LayoutManager>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/auth/login-or-signup" component={LoginOrSignUpPage} />
                    <Route path="/auth/login" component={LoginPage} />
                    <Route path="/auth/signup" component={SignUpPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                </Switch>
            </LayoutManager>
        </WebRouter>
    )
}

export default Router
