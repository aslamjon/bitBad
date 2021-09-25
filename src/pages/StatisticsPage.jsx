import React from 'react'

import leftImg from '../assets/images/left.png';
import rightImg from '../assets/images/right.png';
import { Row } from '../components/Grid';
import Table from '../components/Table';
import {TitleStyled, HistoryBalance, ArrowsStyled} from './styleOfPages/DashboardStyle';
import Search from '../components/Search';
import Select from '../components/Select';

const StatisticsPage = () => {
    return (
        <>
            <HistoryBalance mt={20}>
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
            </HistoryBalance>
        </>
    )
}

export default StatisticsPage
