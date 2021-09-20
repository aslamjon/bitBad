import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { user } from '../redux/user/userSelector';
import { Col, Row } from '../components/Grid';
import styled, { css } from 'styled-components';
import Title from '../components/Title';

const ColStyled = styled(Col)`

`;
const TitleStyled = styled(Title)`
    color: #334D6E;
    display: flex;
    justify-content: space-between;
    ${({bold}) => bold && css`
        font-weight: bold;
    `}
`;

const DashboardPage = ({ user }) => {
    console.log(user)
    return (
        <>
            <Row>
                <ColStyled key={1} sm={12} md={8}></ColStyled>
                <ColStyled key={2} sm={12} md={4}>
                    <TitleStyled title18 bold>Hisobingiz</TitleStyled>
                    
                </ColStyled>
            </Row>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    user: user
})



export default connect(mapStateToProps, null)(DashboardPage);
