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
import IsGuest from '../services/auth/IsGuest'
import IsAuth from '../services/auth/IsAuth'
import ProductsPage from '../pages/ProductsPage'
import Streams from '../pages/StreamsPage'
import StatisticsPage from '../pages/StatisticsPage'
import ConfirmPage from '../pages/ConfirmPage'
import PaymentPage from '../pages/PaymentPage'

const Router = () => {
    return (
        <WebRouter>
            <LayoutManager>
                <IsAuth>
                    <Switch>
                        <Route path="/dashboard" component={DashboardPage} />
                        <Route path="/products" component={ProductsPage} />
                        <Route path="/streams" component={Streams} />
                        <Route path="/statistics" component={StatisticsPage} />
                        <Route path="/payment" component={PaymentPage} />
                        <Route path="/404" component={PageNotFound} />
                        <Route path="*" render={() => <Redirect to="/dashboard"/> } />
                    </Switch>
                </IsAuth>
                <IsGuest>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/auth/login-or-signup" component={LoginOrSignUpPage} />
                        <Route path="/auth/login/:phone" component={LoginPage} />
                        <Route path="/auth/signup/:phone" component={SignUpPage} />
                        <Route path="/auth/confirm/:phone/:full_name" component={ConfirmPage} />
                        <Route path="/404" component={PageNotFound} />
                        <Route path="*" render={() => <Redirect to="404"/> } />
                    </Switch>
                </IsGuest>
            </LayoutManager>
        </WebRouter>
    )
}

export default Router
