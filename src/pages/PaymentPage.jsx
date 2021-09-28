import React from 'react'
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

import leftImg from '../assets/images/left.png';
import rightImg from '../assets/images/right.png';
import { Row } from '../components/Grid';
import Table from '../components/Table';
import {TitleStyled, HistoryBalance, ArrowsStyled} from './styleOfPages/DashboardStyle';
import Search from '../components/Search';
import Select from '../components/Select';
import money from '../assets/images/money.svg';
import wallet from '../assets/images/wallet.svg';
import Button from '../components/Button';

const PaymentStyled = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: 20px;
`;
const PaymentFormStyled = styled.form`
    display: flex;
    justify-content: center;
    padding-top: 102px;
    label {
        width: 45px;
        height: 45px;
        background: #99CF67;
        border-radius: 15px 0px 0px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        background: #F0F0F0;
        border-radius: 0px 15px 15px 0px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: rgba(51, 77, 110, 0.5);
        border: none;
        outline: none;
        padding: 10px 20px;
        margin-right: 45px;
        &:last-child {
            margin-right: 27px;
        }
    }
    button {
        background: #398739;
        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
        padding: 5px 30px;
    }
`;

const PaymentPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const paymentHandling = () => {

    }
    return (
        <PaymentStyled>
            <PaymentFormStyled onSubmit={handleSubmit(paymentHandling)}>
                <label htmlFor="wallet"><img src={wallet} alt="wallet" /></label>
                <InputMask mask="9999 9999 9999 9999" maskChar={null} {...register('Wallet', { required: true})} id="wallet" placeholder="**** **** **** ****" />
                <label htmlFor="sum"><img src={money} alt="sum" /></label>
                <InputMask mask="999,999,999,999" maskChar={null} {...register('sum', { required: true})} id="sum" placeholder="Summa" />
                <Button>Tasdiqlash</Button>
            </PaymentFormStyled>
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
        </PaymentStyled>
    )
}

export default PaymentPage
