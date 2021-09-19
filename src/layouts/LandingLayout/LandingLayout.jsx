import React from 'react'
import Footer from '../../components/Footer'

const LandingLayout = ({children}) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout
