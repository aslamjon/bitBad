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
    min-height: 100vh;
    .dashboard__body {
        padding: 21px 20px;
        background: #99CF67;
        min-height: 70vh;
    }
`;

const DashboardLayout = ({children, token, setCurrentUser}) => {
    const history = useHistory();
    if (!token) history.push('/');
    useEffect(() => {
        ApiServices.getMe().then(res => {
            setCurrentUser(res.data)
        }).catch(e => {
            console.log(e)
            console.log('dashboradLayout',token)
        })
    }, [])
    
    return (
        <DashboardStyled>
            <div className="dashboard__body">
                <Navbar />
                {children}
            </div>
            <Footer />
        </DashboardStyled>
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
