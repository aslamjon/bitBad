import React from 'react'
import { BrowserRouter as WebRouter, Switch, Route, Redirect } from 'react-router-dom'
import LayoutManager from '../layouts/LayoutManager'
import DashboardPage from '../pages/DashboardPage'
import LandingPage from '../pages/LandingPage'
import LoginOrSignUpPage from '../pages/LoginOrSignUpPage'
import LoginPage from '../pages/LoginPage'
import PageNotFound from '../pages/PageNotFound'
import SignUpPage from '../pages/SignUpPage'

import 'react-toastify/dist/ReactToastify.css';

const Router = () => {
    return (
        <WebRouter>
            <LayoutManager>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/auth/login-or-signup" component={LoginOrSignUpPage} />
                    <Route path="/auth/login/:phone" component={LoginPage} />
                    <Route path="/auth/signup/:phone" component={SignUpPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/404" component={PageNotFound} />
                    <Route path="*" render={() => <Redirect to="404"/> } />
                </Switch>
            </LayoutManager>
        </WebRouter>
    )
}

export default Router
