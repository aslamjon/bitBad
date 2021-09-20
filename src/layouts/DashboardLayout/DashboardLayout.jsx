import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const DashboardStyled = styled.div`
    padding: 21px 20px;
    background: #99CF67;
`;

const DashboardLayout = ({children}) => {
    return (
        <>
            <DashboardStyled>
                <Navbar />
                {children}
            </DashboardStyled>
            <Footer />
        </>
    )
}

export default DashboardLayout
