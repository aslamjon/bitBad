import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import Title from '../Title';
import del from '../../assets/images/del.svg';
import telegram from '../../assets/images/telegram.svg';
import SvgIcon from '../SvgIcon';
const CardStyled = styled.div`
    background: #fff;
    border-radius: 15px;
    padding: 22px 20px 19px 18px;
    .des {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #929FAF;
    }
`;
const Dotted = styled.div`
    opacity: 0.8;
    border: 2px dashed rgba(51, 77, 110, 0.5);
    width: 100%;
    margin: 33px 0 39px 0;
`;
const BottomStyled = styled.div`
    padding: 22px 18px 29px 17px;
    background: #BFCCDD;
    border-radius: 15px;
    input {
        background: #F0F0F0;
        border-radius: 15px;
        padding: 14px 19px 13px;
        border: none;
        outline: none;
        width: 100%;
    }
    .bottomContainer {
        margin-top: 27px;
        display: flex;
        align-items: stretch;
        a {
            background: #2196F3;
            border-radius: 15px;
            padding: 5px 20px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 11px 0 13px;
            height: 27px;
            div {
                width: 14px;
                height: 12px;
            }
        }
        &__delete {
            background: #F19F9D;
            border-radius: 15px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 27px;
            height: 27px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
`;
const StreamsCard = ({ title, des, url }) => {
    return (
        <CardStyled>
            <Title title13>{title}</Title>
            <div className="des">{des}</div>
            <Dotted />
            <BottomStyled>
                <input type="text" value={url}/>
                <div className="bottomContainer">
                    <Button>Nusxa ko'chirish</Button>
                    <a href="https://t.me/I_am_Anonim">
                        <SvgIcon src={telegram} color="#fff"/>
                    </a>
                    <button className="bottomContainer__delete">
                        <img src={del} alt="del" />
                    </button>
                </div>
            </BottomStyled>
        </CardStyled>
    )
}

export default StreamsCard
