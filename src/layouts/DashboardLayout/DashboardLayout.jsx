import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { setCurrentUser } from '../../redux/user/userAction'
import { token, user } from '../../redux/user/userSelector'
import ApiServices from '../../services/api/ApiServices'
const DashboardStyled = styled.div`
    padding: 21px 20px;
    background: #99CF67;
`;

const DashboardLayout = ({children, token, setCurrentUser}) => {
    const history = useHistory();
    useEffect(() => {
        ApiServices.getMe().then(res => {
            setCurrentUser(res.data)
        }).catch(e => {
            console.log(e.response)
            if (!token) history.push('/');
            console.log('dashboradLayout',token)
        })
    }, [])
    
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
const mapStateToProps = createStructuredSelector({
    user: user,
    token: token
})

const mapDispathToProps = dispatch => ({
    setCurrentUser: value => dispatch(setCurrentUser(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(DashboardLayout);
