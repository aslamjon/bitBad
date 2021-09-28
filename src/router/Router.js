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
import FaqPage from '../pages/FaqPage'
import ProfilePage from '../pages/ProfilePage'

const Router = () => {
    let route = ''
    if (process.env.NODE_ENV !== 'development') {
        route = '/bitBat'
    }
    return (
        <WebRouter>
            <LayoutManager>
                <IsAuth>
                    <Switch>
                        <Route path={`${route}/dashboard`} component={DashboardPage} />
                        <Route path={`${route}/products`} component={ProductsPage} />
                        <Route path={`${route}/streams`} component={Streams} />
                        <Route path={`${route}/statistics`} component={StatisticsPage} />
                        <Route path={`${route}/payment`} component={PaymentPage} />
                        <Route path={`${route}/faq`} component={FaqPage} />
                        <Route path={`${route}/profile`} component={ProfilePage} />
                        <Route path={`${route}/404`} component={PageNotFound} />
                        <Route path="*" render={() => <Redirect to="/dashboard"/> } />
                    </Switch>
                </IsAuth>
                <IsGuest>
                    <Switch>
                        <Route exact path={`${route}/`} component={LandingPage} />
                        <Route path={`${route}/auth/login-or-signup`} component={LoginOrSignUpPage} />
                        <Route path={`${route}/auth/login/:phone`} component={LoginPage} />
                        <Route path={`${route}/auth/signup/:phone`} component={SignUpPage} />
                        <Route path={`${route}/auth/confirm/:phone/:full_name`} component={ConfirmPage} />
                        <Route path={`${route}/404`} component={PageNotFound} />
                        <Route path="*" render={() => <Redirect to="404"/> } />
                    </Switch>
                </IsGuest>
            </LayoutManager>
        </WebRouter>
    )
}

export default Router
