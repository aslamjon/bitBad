import React, {useState, useEffect} from 'react'

import leftImg from '../assets/images/left.png';
import rightImg from '../assets/images/right.png';
import { Row } from '../components/Grid';
import Table from '../components/Table';
import {TitleStyled, HistoryBalance, ArrowsStyled} from './styleOfPages/DashboardStyle';
import Search from '../components/Search';
import Select from '../components/Select';
import ApiServices from '../services/api/ApiServices';
import Empty from '../components/Empty'
const StatisticsPage = () => {
    const [statistics, setStatistics] = useState({data:[], isFetched: false})
    useEffect(() => {
        setStatistics({data:[], isFetched: true})
        ApiServices.getOrders().then(res => setStatistics({data:res.data.results, isFetched: false}))
        .catch(e => setStatistics({data:[], isFetched: false}))
    },[])
    return (
        <>
                {statistics.data.length ? <HistoryBalance mt={20}>
                    <Row justify="space-between" className="rowCound">
            
                    <Row>
                        <TitleStyled>Qator soni: </TitleStyled>
                        <Select row={25} />
                    </Row>
                    <Search className="search" />
                    </Row>
                    <Table statistics upAndDown tableData={[
                        {date: '20-20-2000', card: '1234455', 
                        sum: "24000", condition: 'open'}
                        ]}/>
                    <Table statistics tableData={[
                        {date: '20-20-2000', card: '1234455', 
                        sum: "24000", condition: 'open'}
                    ]}/>
                    <Row justify="center">
                        <ArrowsStyled src={leftImg} alt="left" />
                        <ArrowsStyled src={rightImg} alt="right" />
                    </Row>
                </HistoryBalance> : <Empty title="Statistika topilmadi" />}
        </>
    )
}

export default StatisticsPage
