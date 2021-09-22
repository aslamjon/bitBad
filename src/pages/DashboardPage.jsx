import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { user } from '../redux/user/userSelector';
import { Col, Row } from '../components/Grid';
import styled, { css } from 'styled-components';
import Title from '../components/Title';

const ColStyled = styled(Col)`
    margin: 20px 0;
    padding: 0 10px;
`;
const ReportStyled = styled.div`
    background: #fff;
    padding: 45px 20px 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    `;
const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TitleStyled = styled(Title)`
    color: #334D6E;
    display: flex;
    justify-content: space-between;
    ${({bold}) => bold && css`
        font-weight: bold;
    `}
`;

const BorderDashed = styled.div`
    width: 100%;
    opacity: 0.8;
    border-bottom: 2px dashed #334D6E;
    margin: 44px 0 51px 0;
    ${({sec}) => sec && css`
        margin: 56px 0 31px 0;
    `}
`;

const DashboardPage = ({ user }) => {
    
    // console.log(user)
    return (
        <>
            <Row>
                <ColStyled key={1} sm={12} md={8}></ColStyled>
                <ColStyled key={2} sm={12} md={4}>
                    <ReportStyled>
                        <SpaceBetween>
                            <TitleStyled title18 bold>Hisobingiz</TitleStyled>
                            <div className="balance">{} SO'M</div>
                        </SpaceBetween>
                        <BorderDashed />
                        <SpaceBetween>
                            <Title>Butyurma</Title>
                            <div>{}</div>
                        </SpaceBetween>
                        <BorderDashed sec />
                    </ReportStyled>                    
                </ColStyled>
            </Row>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    user: user
})

export default connect(mapStateToProps, null)(DashboardPage);