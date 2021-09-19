import React from 'react'
import { withRouter } from 'react-router';
import { includes, isEqual, get } from 'lodash';
import LandingLayout from './LandingLayout/LandingLayout';
import AuthLayout from './AuthLayout/AuthLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
const LayoutManager = ({children, location}) => {

    const getPath = (path) => {
        if (isEqual(path, '/')) return 'landing';
        if (includes(path, 'auth')) return 'auth';
        return 'dashboard';
    }
    const getLayout = () => {
        return {
            landing : LandingLayout,
            auth : AuthLayout,
            dashboard : DashboardLayout 
        }
    }
    console.log(location)
    const Layout = getLayout()[getPath(get(location, 'pathname', 'dashboard'))]
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default withRouter(LayoutManager);
