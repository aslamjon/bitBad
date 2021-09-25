import React, {useEffect, useState} from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { user } from '../redux/user/userSelector';
import { Row } from '../components/Grid';
import Button from '../components/Button';
import Search from '../components/Search';
import Select from '../components/Select';
import {BarChartComponent} from '../components/Chart';
import {
    ColStyled,
    ChartStyled,
    ReportStyled,
    Dotted,
    TitleStyled,
    BorderDashed,
    DonaStyled,
    HistoryBalance,
    ArrowsStyled
} from './styleOfPages/DashboardStyle';
import ApiServices from '../services/api/ApiServices';
import leftImg from '../assets/images/left.png';
import rightImg from '../assets/images/right.png';
import Table from '../components/Table';

const DashboardPage = ({ user }) => {
    // console.log(user)
    const [statistics, setStatistics] = useState({data: [], isFetched: false})
    useEffect(() => {
        ApiServices.getStatistics().then(res => {
            if (res && res.data) {
                setStatistics((statistics) => ({...statistics, data: res.data, isFetched: true}))
            }
        }).catch(e => {console.log(e); setStatistics((statistics) => ({...statistics, data: {}, isFetched: false}))})
    },[])
    const {data=[], isFetched=false} = statistics;
    return (
        <>
            <Row row>
                <ColStyled sm={12} md={8}>
                    <ChartStyled>
                        <div className="title">Statistika</div> 
                        {isFetched ? <BarChartComponent data={data} /> : 'Loading' }
                    </ChartStyled>
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
                <Row justify="space-between" className="rowCound">
                    <Row>
                        <TitleStyled>Qator soni: </TitleStyled>
                        <Select row={25} />
                    </Row>
                    <Search className="search" />
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