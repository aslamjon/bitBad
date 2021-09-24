import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { user } from '../redux/user/userSelector';
import { Col, Row } from '../components/Grid';
import styled, { css } from 'styled-components';
import Title from '../components/Title';
import Button from '../components/Button';
import Search from '../components/Search';
import Select from '../components/Select';
import Table from '../components/Table/Table';

import leftImg from '../assets/images/left.png'
import rightImg from '../assets/images/right.png'

const ColStyled = styled(Col)`
    margin: 20px 0;
    padding: 0 10px;
`;
const ChartStyled = styled.div`
    background: #fff;
    padding: 45px 20px 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-left: -10px;
`;
const ReportStyled = styled.div`
    background: #fff;
    padding: 45px 20px 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-right: -10px;
    .mt {
        margin-top: 50px;
    }
`;

const Dotted = styled.div`
    border: 1px dotted black;
    opacity: 0.8;
    border: 2px dashed rgba(51, 77, 110, 0.5);
    width: 100%;
`;
const TitleStyled = styled(Title)`
    color: #334D6E;
    background: #fff;
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

const DonaStyled = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: rgba(51, 77, 110, 0.7);
    background: #fff;
`;
const HistoryBalance = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 43px 40px 32px;
    margin-bottom:100px;
`;
const ArrowsStyled = styled.img`
    border-radius: 50%;
    margin: 10px 15px 0;
    cursor: pointer;

`;

const DashboardPage = ({ user }) => {
    // console.log(user)
    return (
        <>
            <Row>
                <ColStyled sm={12} md={8}>
                    <ChartStyled>Chart</ChartStyled>
                </ColStyled>
                <ColStyled sm={12} md={4}>
                    <ReportStyled>
                        <Row justify='space-between'>
                            <TitleStyled title18 bold>Hisobingiz</TitleStyled>
                            <div className="balance">{user.balance} SO'M</div>
                        </Row>
                        <BorderDashed />
                        <Row>
                            <Dotted className="dotted"/>
                            <Row justify='space-between'>
                                <TitleStyled >Butyurma</TitleStyled>
                                <DonaStyled>{0} dona</DonaStyled>
                            </Row>
                        </Row>
                        <Row className="mt">
                            <Dotted className="dotted"/>
                            <Row justify='space-between'>
                                <TitleStyled >So'rov</TitleStyled>
                                <DonaStyled>{0} dona</DonaStyled>
                            </Row>
                        </Row>
                        <BorderDashed sec />
                        <Row justify='space-around'>
                            <Button>Pul ishlash</Button>
                            <Button pinck>Pul yechish</Button>
                        </Row>
                    </ReportStyled>                    
                </ColStyled>
            </Row>
            <HistoryBalance>
                <TitleStyled bold>Balans tarixi</TitleStyled>
                <Row justify="space-between">
                    <Row>
                        <TitleStyled>Qator soni: </TitleStyled>
                        <Select row={25} />
                    </Row>
                    <Search />
                </Row>
                <Table upAndDown tableData={[
                    {date: '20-20-2000', card: '1234455', 
                    sum: "24000", condition: 'open'}
                    ]}/>
                <Table tableData={[
                    {date: '20-20-2000', card: '1234455', 
                    sum: "24000", condition: 'open'}
                ]}/>
                <Row justify="center">
                    <ArrowsStyled src={leftImg} alt="left" />
                    <ArrowsStyled src={rightImg} alt="right" />
                </Row>
            </HistoryBalance>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    user: user
})

export default connect(mapStateToProps, null)(DashboardPage);